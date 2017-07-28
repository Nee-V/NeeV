<template>
  <a :class="['button']" :data-open="revealId">{{ buttonText }}</a>
</template>

<script>
  export default {
    name: 'reveal-trigger',
    data () {
      return {
        revealId: this.id ? this.id : 'reveal-dialog',
        buttonText: this.text ? this.text : 'Open Modal'
      }
    },
    props: {
      id: {
        type: String,
        default: () => 'reveal-dialog'
      },
      text: {
        type: String,
        default: () => 'Open Modal'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    margin-bottom: 0;
  }
</style>
