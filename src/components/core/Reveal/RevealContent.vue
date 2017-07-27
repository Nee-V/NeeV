<template>
  <div :id="id" class="reveal" data-reveal>
    <slot></slot>
    <button v-if="closeButton" class="close-button" data-close aria-label="Close modal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'reveal-trigger',
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
