<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ label }}</h1>
      <div id="orbit" class="orbit" role="region" :aria-label="label" data-orbit data-timer-delay='2000'>
        <ul class="orbit-container">
          <button class="orbit-previous" v-if="arrows"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button class="orbit-next" v-if="arrows"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          <li  v-bind:class="index === 0 ? 'is-active' : ''" class="orbit-slide" v-for="(image, index) in images">
            <img class="orbit-image" :src="image.url" v-bind:alt="image.alt">
            <figcaption class="orbit-caption show-for-medium">{{ image.title }}</figcaption>
          </li>
        </ul>
        <nav class="orbit-bullets" v-if="dots">
          <button v-bind:class="index === 0 ? 'is-active' : ''" v-for="(image, index) in images" :data-slide="index">
            <span class="show-for-sr">image.title</span>
            <span v-if="index === 0" class="show-for-sr">Current Slide</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orbit',
  mounted () {
    this.orbit = new Foundation.Orbit($('#orbit'), {
      // These options can be declarative using the data attributes
      timerDelay: 3000
    })
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
