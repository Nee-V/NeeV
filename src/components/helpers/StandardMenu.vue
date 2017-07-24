<template>
  <ul
    v-bind:class="[
      'menu',
      verticalLayout ? 'vertical' : '',
      linkAlignment === 'left' ? 'align-left' : '',
      linkAlignment === 'right' ? 'align-right' : '',
      linkAlignment === 'center' ? 'align-center' : '',
      expandMenu ? 'expanded' : '']">
    <li v-for="link in menuStructure">
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
      <standard-menu
        v-if="link.submenu"
        :menu="link.submenu"
        :mode="menuMode"
        :vertical="verticalLayout"
        :alignment="linkAlignment"
        :expanded="expandMenu">
      </standard-menu>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      verticalLayout: this.vertical ? this.vertical : false,
      linkAlignment: this.alignment ? this.alignment : '',
      menuStructure: this.menu ? this.menu : [],
      menuMode: this.mode ? this.mode : 'links',
      expandMenu: this.expanded ? this.expanded : false
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    vertical: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => ''
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
