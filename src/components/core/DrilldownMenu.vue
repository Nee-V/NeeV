<template>
  <ul id="drilldown" class="vertical menu" data-drilldown>
    <li>
      <a>Item 1</a>
      <ul class="vertical menu">
        <li><a>Item 1A</a></li>
        <!-- ... -->
      </ul>
    </li>
    <li><a>Item 2</a></li>
  </ul>
</template>

<script>
export default {
  name: 'drilldown',
  mounted () {
    this.drilldown = new Foundation.Drilldown($('#drilldown'), {
      // These options can be declarative using the data attributes
      animationDuration: 500
    })
  },
  data () {
    return {
      msg: 'Drilldown Menu'
    }
  },
  destroyed () {
    this.drilldown.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
