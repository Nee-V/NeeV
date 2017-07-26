<template>
  <button v-if="(this.$props.direction === 'prev')" class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
  <button v-else-if="(this.$props.direction === 'next')" class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
</template>

<script>
export default {
  name: 'orbit-arrow',
  props: {
    direction: {
      type: String,
      default: () => 'prev'
    }
  }
}
</script>
