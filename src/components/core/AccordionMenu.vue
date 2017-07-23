<template>
  <ul
    id="accordion-menu"
    class="vertical menu"
    data-accordion-menu
    v-bind:data-multi-open="multi ? multi : 'false'"
    v-bind:data-submenu-toggle="toggle"
    v-bind:data-submenu-toggle-text="toggleText"
    v-bind:data-slide-speed="speed">

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
          <a v-bind:href="sublink.target">{{ sublink.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  mounted () {
    this.accordionMenu = new Foundation.AccordionMenu($('#accordion-menu'), {
      // These options can be declarative using the data attributes
    })
  },
  name: 'accordion-menu',
  data () {
    return {
      msg: 'Accordion Menu',
      multi: this.multiExpand ? this.multiExpand : false,
      menuStructure: this.menu ? this.menu : [],
      toggle: this.submenuToggle ? this.submenuToggle : false,
      toggleText: this.submenuToggleText ? this.submenuToggleText : false,
      speed: this.slideSpeed ? this.slideSpeed : 250,
      menuMode: this.mode ? this.mode : 'links'
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
    slideSpeed: {
      type: Number,
      default: () => 250
    },
    multiExpand: {
      type: Boolean,
      default: () => false
    },
    submenuToggle: {
      type: Boolean,
      default: () => false
    },
    submenuToggleText: {
      type: String,
      default: () => 'Back'
    },
    mode: {
      type: String,
      default: () => 'router'
    }
  },
  destroyed () {
    this.accordionMenu.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
