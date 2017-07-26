<template>
  <div class="wrapper">
    <ul id="magellan" class="horizontal menu" data-magellan data-sticky>
      <li><a href="#first">First</a></li>
      <li><a href="#second">Second</a></li>
      <li><a href="#third">Third</a></li>
    </ul>
    <div class="sections">
      <section id="first" data-magellan-target="first"><span>First Section</span></section>
      <section id="second" data-magellan-target="second"><span>Second Section</span></section>
      <section id="third" data-magellan-target="third"><span>Third Section</span></section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'magellan',
  props: {
    marginTop: {
      type: Number,
      default: () => 0
    },
    animationDuration: {
      type: Number,
      default: () => 500
    },
    activeClass: {
      type: String,
      default: () => 'is-active'
    },
    animationEasing: {
      type: String,
      default: () => 'swing'
    },
    threshold: {
      type: Number,
      default: () => 50
    },
    deepLinking: {
      type: Boolean,
      default: () => false
    },
    offset: {
      type: Number,
      default: () => 0
    }
  },
  mounted () {
    this.magellan = new Foundation.Magellan($('#magellan'), {
      // These options can be declarative using the data attributes
      animationEasing: 'swing',
      animationDuration: this.$props.animationDuration,
      marginTop: this.$props.marginTop,
      activeClass: this.$props.activeClass,
      threshold: this.$props.threshold,
      deepLinking: this.$props.threshold,
      offset: this.$props.offset
    })
  },
  destroyed () {
    this.magellan.destroy()
  }
}
</script>

<style lang="scss" scoped>
  section {
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    background: $light-gray;
  }

  span {
    font-size: 2rem;
    font-weight: 300;
  }
</style>
