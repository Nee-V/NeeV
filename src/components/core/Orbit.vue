<template>
  <div id="orbit" class="orbit" role="region" :aria-label="label" data-orbit data-timer-delay='2000'>
    <ul class="orbit-container">
      <orbit-arrow v-if="arrows" direction="prev"></orbit-arrow>
      <orbit-arrow v-if="arrows" direction="next"></orbit-arrow>
      <orbit-slide v-bind:class="index === 0 ? 'is-active' : ''" v-for="(image, index) in images" :key="index" :image="image"></orbit-slide>
    </ul>
    <orbit-bullets v-if="dots" :images="images"></orbit-bullets>
  </div>
</template>

<script>
import OrbitArrow from './Orbit/OrbitArrow.vue'
import OrbitBullets from './Orbit/OrbitBullets.vue'
import OrbitSlide from './Orbit/OrbitSlide.vue'

export default {
  name: 'orbit',
  mounted () {
    this.orbit = new Foundation.Orbit($('#orbit'), {
      // These options can be declarative using the data attributes
      timerDelay: 3000
    })
  },
  components: {
    OrbitArrow,
    OrbitBullets,
    OrbitSlide
  },
  data () {
    return {
      label: this.title ? this.title : '',
      arrows: true,
      dots: true,
      images: this.slides ? this.slides : ''
    }
  },
  props: {
    title: {
      type: String,
      default: () => 'Orbit'
    },
    slides: {
      type: Array,
      default: () => [
        {
          url: require('@/assets/img/orbit/01.jpg'),
          title: 'Space, the final frontier.',
          alt: 'Space'
        }, {
          url: require('@/assets/img/orbit/02.jpg'),
          title: 'Lets Rocket!',
          alt: 'Space'
        }, {
          url: require('@/assets/img/orbit/03.jpg'),
          title: 'Encapsulating',
          alt: 'Space'
        }, {
          url: require('@/assets/img/orbit/04.jpg'),
          title: 'Outta This World',
          alt: 'Space'
        }
      ]
    }
  },
  destroyed () {
    this.orbit.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
