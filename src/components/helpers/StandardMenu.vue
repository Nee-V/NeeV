<template>
  <ul
    v-bind:class="[
      'menu',
      verticalLayout ? 'vertical' : '',
      linkAlignment === 'left' ? 'align-left' : '',
      linkAlignment === 'right' ? 'align-right' : '',
      linkAlignment === 'center' ? 'align-center' : '',
      expandMenu ? 'expanded' : '']">
    <li><a href="#">Home</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">Home</a></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      verticalLayout: this.vertical ? this.vertical : false,
      linkAlignment: this.alignment ? this.alignment : '',
      expandMenu: this.expanded ? this.expanded : false
    }
  },
  props: {
    vertical: {
      type: Boolean,
      default: () => false
    },
    mode: {
      type: String,
      default: () => 'router'
    },
    links: {
      type: Array,
      default: () => []
    },
    alignment: {
      type: String,
      default: () => ''
    },
    expanded: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style type="scss" scoped>

</style>
