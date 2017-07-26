<template>
  <nav>
    <button v-bind:class="index === 0 ? 'is-active' : ''" v-for="(image, index) in images" :data-slide="index">
      <span :value="image.title" class="show-for-sr"></span>
      <span v-if="index === 0" class="show-for-sr">Current Slide</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'orbit-bullets',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>
