<template>
  <div :id="revealId" class="reveal" data-reveal>
    <slot></slot>
    <button v-if="exitButton" class="close-button" data-close aria-label="Close modal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'reveal-trigger',
    data () {
      return {
        revealId: this.id ? this.id : 'reveal-dialog',
        buttonText: this.text ? this.text : 'Open Modal',
        exitButton: this.closeButton ? this.closeButton : false
      }
    },
    props: {
      id: {
        type: String,
        default: () => 'reveal-dialog'
      },
      text: {
        type: String,
        default: () => ''
      },
      closeButton: {
        type: Boolean,
        default: () => false
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
