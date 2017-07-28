<template>
  <div id="orbit" class="orbit" role="region" :aria-label="label" data-orbit>
    <ul class="orbit-container">
      <orbit-arrow v-if="navButtons" :class="prevClass" direction="prev"></orbit-arrow>
      <orbit-arrow v-if="navButtons" :class="nextClass" direction="next"></orbit-arrow>
      <orbit-slide v-bind:class="[index === 0 ? 'is-active' : '', slideClass]" v-for="(image, index) in images" :key="index" :image="image"></orbit-slide>
    </ul>
    <orbit-bullets v-if="bullets" :class="boxOfBullets" :images="images"></orbit-bullets>
  </div>
</template>

<script>
import OrbitArrow from './Orbit/OrbitArrow.vue'
import OrbitBullets from './Orbit/OrbitBullets.vue'
import OrbitSlide from './Orbit/OrbitSlide.vue'

let orbitSettings = [
  // These options can be declarative using the data attributes
  'timerDelay',
  'bullets',
  'navButtons',
  'autoPlay',
  'infiniteWrap',
  'accessible',
  'pauseOnHover',
  'swipe',
  'containerClass',
  'slideClass',
  'boxOfBullets',
  'prevClass',
  'nextClass',
  'useMUI',
  'animInFromRight',
  'animOutToRight',
  'animInFromLeft',
  'animOutToLeft'
]

export default {
  name: 'orbit',
  mounted () {
    this.orbit = new Foundation.Orbit($('#' + this.id), this.props)
  },
  computed: {
    // Return our computed props for use in the mounted and watch methods
    props () {
      let newSettings = {}
      for (var i = 0; i < orbitSettings.length; i++) {
        newSettings[orbitSettings[i]] = this.$props[orbitSettings[i]]
      }
      return newSettings
    }
  },
  watch: {
    // Watch our props to re-init Accordion when a prop changes
    props: function (val) {
      $('#' + this.id).foundation('_reset')
      this.orbit = new Foundation.Orbit($('#' + this.id), this.props)
    }
  },
  components: {
    OrbitArrow,
    OrbitBullets,
    OrbitSlide
  },
  data () {
    return {
      label: this.title ? this.title : '',
      images: this.slides ? this.slides : ''
    }
  },
  props: {
    title: {
      type: String,
      default: () => 'Orbit'
    },
    id: {
      type: String,
      default: () => 'orbit'
    },
    containerClass: {
      type: String,
      default: () => 'orbit-container'
    },
    slideClass: {
      type: String,
      default: () => 'orbit-slide'
    },
    boxOfBullets: {
      type: String,
      default: () => 'orbit-bullets'
    },
    prevClass: {
      type: String,
      default: () => 'orbit-previous'
    },
    nextClass: {
      type: String,
      default: () => 'orbit-next'
    },
    animInFromRight: {
      type: String,
      default: () => 'slide-in-right'
    },
    animOutToRight: {
      type: String,
      default: () => 'slide-out-right'
    },
    animInFromLeft: {
      type: String,
      default: () => 'slide-in-left'
    },
    animOutToLeft: {
      type: String,
      default: () => 'slide-out-left'
    },
    geoSync: {
      type: String,
      default: () => ''
    },
    accessible: {
      type: Boolean,
      default: () => true
    },
    useMUI: {
      type: Boolean,
      default: () => true
    },
    pauseOnHover: {
      type: Boolean,
      default: () => true
    },
    swipe: {
      type: Boolean,
      default: () => true
    },
    bullets: {
      type: Boolean,
      default: () => true
    },
    autoPlay: {
      type: Boolean,
      default: () => true
    },
    infiniteWrap: {
      type: Boolean,
      default: () => true
    },
    navButtons: {
      type: Boolean,
      default: () => true
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
    },
    timerDelay: {
      type: Number,
      default: () => 3000
    }
  },
  destroyed () {
    this.orbit.destroy()
  }
}
</script>

<style lang="scss" scoped>
  .orbit-bullets {
    margin-bottom: 0;
  }
</style>
