<template>
  <div class="wrapper">
    <reveal-content :id="revealId" :closeButton="exitButton">
      <slot></slot>
    </reveal-content>
    <reveal-trigger :id="revealId"></reveal-trigger>
  </div>
</template>

<script>
import RevealContent from './Reveal/RevealContent.vue'
import RevealTrigger from './Reveal/RevealTrigger.vue'
export default {
  name: 'reveal',
  mounted () {
    this.reveal = new Foundation.Reveal($('#reveal-dialog'), {
      // These options can be declarative using the data attributes
      animationIn: 'scale-in-up'
    })
  },
  components: {
    RevealContent,
    RevealTrigger
  },
  data () {
    return {
      msg: 'Reveal',
      revealId: this.id ? this.id : 'reveal-dialog',
      exitButton: this.closeButton ? this.closeButton : false
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
    }
  },
  destroyed () {
    this.reveal.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
