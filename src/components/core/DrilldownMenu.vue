<template>
  <ul id="drilldown" class="vertical menu drilldown" data-drilldown data-auto-height="true" data-animate-height="true">
    <li v-for="link in menuStructure">
      <router-link
        v-if="(link.mode === 'router' || (menuMode === 'router' && link.mode !== 'standard')) && link.target"
        v-bind:to="link.target" exact>
        {{ link.title }}
      </router-link>
      <a v-else :href="link.target">{{ link.title }}</a>
      <ul class="menu vertical" v-if="link.submenu" data-submenu>
        <li v-for="link in link.submenu">
          <router-link
            v-if="(link.mode === 'router' || (menuMode === 'router' && link.mode !== 'standard')) && link.target"
            v-bind:to="link.target" exact>
            {{ link.title }}
          </router-link>
          <a
            v-else
            v-bind:href="link.target">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </li>
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
      msg: 'Drilldown Menu',
      menuStructure: this.menu ? this.menu : [],
      menuMode: this.mode ? this.mode : 'router'
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => [
        {
          title: 'Home',
          target: '/'
        }
      ]
    },
    mode: {
      type: String,
      default: () => 'router'
    }
  },
  destroyed () {
    this.drilldown.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
