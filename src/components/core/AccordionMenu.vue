<template>
  <ul
    id="accordion-menu"
    class="vertical menu"
    data-accordion-menu
    v-bind:data-multi-open="multi ? multi : 'false'"
    v-bind:data-submenu-toggle="toggle"
    v-bind:data-submenu-toggle-text="toggleText"
    v-bind:data-slide-speed="speed">

    <li v-for="(link, index) in links">
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
    <li>
      <a>Item 1</a>
      <ul class="menu vertical nested">
        <li><a>Item 1A</a></li>
        <li><a>Item 1B</a></li>
      </ul>
    </li>
    <li><a>Item 2</a></li>
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
      toggle: this.submenuToggle ? this.submenuToggle : false,
      toggleText: this.submenuToggleText ? this.submenuToggleText : false,
      speed: this.slideSpeed ? this.slideSpeed : 250,
      links: this.menuLinks ? this.menuLinks : [],
      menuMode: this.mode ? this.mode : 'links'
    }
  },
  props: {
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
    menuLinks: {
      type: Array,
      default: () => [
        {
          title: 'Home',
          target: '/',
          type: 'absolute',
          mode: 'router'
        },
        {
          title: 'Components',
          target: '/',
          type: 'absolute',
          mode: 'standard',
          submenu: [
            {
              title: 'Accordion',
              target: '/accordion',
              type: 'absolute',
              mode: 'router'
            },
            {
              title: 'Accordion Menu',
              target: '/accordion-menu',
              type: 'absolute',
              mode: 'router'
            }
          ]
        }
      ]
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
