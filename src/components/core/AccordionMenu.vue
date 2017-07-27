<template>
  <ul
    :id="id"
    :class="['vertical', 'menu']"
    data-accordion-menu
    :data-submenu-toggle="submenuToggle">

    <li
      v-for="(link, index) in menu"
      :class="[
        submenuToggle ? 'has-submenu-toggle' : '',
        (link.submenu && submenuToggle) ? 'is-accordion-submenu-parent' : ''
      ]">
      <router-link
        v-if="link.mode === 'router' || (mode === 'router' && link.mode !== 'standard')"
        v-bind:to="link.target" exact>
        {{ link.title }}
      </router-link>
      <a
        v-else
        v-bind:href="link.target">
        {{ link.title }}
      </a>
      <standard-menu v-if="link.submenu" :submenu-toggle="submenuToggle" :menu="link.submenu" :vertical="true"></standard-menu>
      <button class="submenu-toggle" v-if="submenuToggle && link.submenu"></button>
    </li>
  </ul>
</template>

<script>
import StandardMenu from '@/components/helpers/StandardMenu.vue'

let accordionMenuSettings = [
  'slideSpeed',
  'multiOpen',
  'subMenuToggle',
  'subMenuToggleText'
]
let i = 0

export default {
  name: 'accordion-menu',
  mounted () {
    this.accordionMenu = new Foundation.AccordionMenu($('#' + this.id), this.props)
  },
  components: {
    StandardMenu
  },
  computed: {
    // Return our computed props for use in the mounted and watch methods
    props () {
      let newSettings = {}
      for (i = 0; i < accordionMenuSettings.length; i++) {
        newSettings[accordionMenuSettings[i]] = this.$props[accordionMenuSettings[i]]
      }
      return newSettings
    }
  },
  watch: {
    // Watch our props to re-init Accordion when a prop changes
    props: function (val) {
      this.accordionMenu.destroy()
      this.accordionMenu = new Foundation.AccordionMenu($('#' + this.id), this.props)
      if (this.$props.submenuToggle === false) {
        var parent = document.getElementById(this.id)
        var children = document.getElementsByClassName('submenu-toggle')
        for (i = 0; i < children.length; i++) {
          parent.removeChild(children[i])
        }
      }
      console.log('Done')
    }
  },
  data () {
    return {
      msg: 'Accordion Menu'
    }
  },
  props: {
    id: {
      type: String,
      default: () => 'accordion-menu'
    },
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
    multiOpen: {
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
