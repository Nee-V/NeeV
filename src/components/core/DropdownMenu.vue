<template>
  <ul id="dropdown-menu" class="dropdown menu" data-dropdown-menu>
    <li v-for="(link, index) in menuStructure">
      <router-link
        v-if="link.mode === 'router' || (menuMode === 'router' && link.mode !== 'standard')"
        v-bind:to="link.target" exact>
        {{ link.title }}
      </router-link>
      <a
        v-else
        v-bind:href="link.target">
        {{ link.title }}
      </a>
      <ul class="menu vertical" v-if="link.submenu">
        <li v-for="sublink in link.submenu">
          <router-link
            v-if="link.mode === 'router' || (menuMode === 'router' && link.mode !== 'standard')"
            v-bind:to="sublink.target" exact>
            {{ sublink.title }}
          </router-link>
          <a
            v-else
            v-bind:href="sublink.target">
            {{ sublink.title }}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'dropdown-menu',
  mounted () {
    this.dropdownMenu = new Foundation.DropdownMenu($('#dropdown-menu'), {
      // These options can be declarative using the data attributes
      hoverDelay: 300
    })
  },
  data () {
    return {
      menuMode: this.mode ? this.mode : 'links',
      menuStructure: this.menu ? this.menu : []
    }
  },
  props: {
    mode: {
      type: String,
      default: () => 'router'
    },
    menu: {
      type: Array,
      default: () => []
    }
  },
  destroyed () {
    this.dropdownMenu.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
