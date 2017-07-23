<template>
  <p><a :class="['button']" :data-open="revealId">{{ buttonText }}</a></p>
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
</style>
