<template>
  <li class="orbit-slide">
    <img class="orbit-image" :src="image.url" v-bind:alt="image.alt">
    <figcaption class="orbit-caption show-for-medium">{{ image.title }}</figcaption>
  </li>

</template>

<script>
export default {
  name: 'orbit-slide',
  props: {
    image: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
