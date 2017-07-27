<template>
  <div class="wrapper">
    <reveal-content :id="id" :close-button="closeButton">
      <slot>{{ msg }}</slot>
    </reveal-content>
    <reveal-trigger :id="id"></reveal-trigger>
  </div>
</template>

<script>
import RevealContent from './Reveal/RevealContent.vue'
import RevealTrigger from './Reveal/RevealTrigger.vue'

let i = 0

let revealSettings = [
  'closeButton',
  'animationIn',
  'animationOut',
  'showDelay',
  'hideDelay',
  'closeOnClick',
  'closeOnEsc',
  'multipleOpened',
  'vOffset',
  'hOffset',
  'fullScreen',
  'bottomOffsetPct',
  'overlay',
  'resetOnClose',
  'deepLink',
  'updateHistory',
  'appendTo',
  'additionalOverlayClasses'
]

export default {
  name: 'reveal',
  mounted () {
    this.reveal = new Foundation.Reveal($('#' + this.id), this.props)
  },
  components: {
    RevealContent,
    RevealTrigger
  },
  computed: {
    // Return our computed props for use in the mounted and watch methods
    props () {
      let newSettings = {}
      for (i = 0; i < revealSettings.length; i++) {
        newSettings[revealSettings[i]] = this.$props[revealSettings[i]]
      }
      return newSettings
    }
  },
  data () {
    return {
      msg: 'Reveal'
    }
  },
  watch: {
    // Watch our props to re-init Accordion when a prop changes
    props: function (val) {
      this.reveal.destroy()
      this.reveal = new Foundation.Reveal($('#' + this.id), this.props)
    }
  },
  props: {
    id: {
      type: String,
      default: () => 'reveal-dialog'
    },
    closeButton: {
      type: Boolean,
      default: () => false
    },
    animationIn: {
      type: String,
      default: () => ''
    },
    animationOut: {
      type: String,
      default: () => ''
    },
    showDelay: {
      type: Number,
      default: () => 0
    },
    hideDelay: {
      type: Number,
      default: () => 0
    },
    closeOnClick: {
      type: Boolean,
      default: () => true
    },
    closeOnEsc: {
      type: Boolean,
      default: () => true
    },
    multipleOpened: {
      type: Boolean,
      default: () => false
    },
    vOffset: {
      type: String,
      default: () => 'auto'
    },
    hOffset: {
      type: String,
      default: () => 'auto'
    },
    fullScreen: {
      type: Boolean,
      default: () => false
    },
    btmOffsetPct: {
      type: Number,
      default: () => 10
    },
    overlay: {
      type: Boolean,
      default: () => false
    },
    resetOnClose: {
      type: Boolean,
      default: () => false
    },
    deepLink: {
      type: Boolean,
      default: () => false
    },
    updateHistory: {
      type: Boolean,
      default: () => false
    },
    appendTo: {
      type: String,
      default: () => 'body'
    },
    additionalOverlayClasses: {
      type: String,
      default: () => ''
    }
  },
  destroyed () {
    this.reveal.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
