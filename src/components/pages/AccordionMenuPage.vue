<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h2>{{ title }}</h2>
      <p>You can use this component for creating menus based on the Zurb Foundation accordion menu.</p>
      <p>The only valid prop for the component at the moment is a menu array. Each item in the array MUST have a title and a target. They can also have an option class string for setting custom classes and a mode prop.</p>
      <p>The mode prop is for setting the internal link mode to use either the Vue Router or set a standard anchor tag. The options are 'router' (Default) and 'standard'.</p>
      <accordion-menu :menu="menu" :submenuToggle="false" :mode="'router'"></accordion-menu>
    </div>
  </div>
</template>

<script>
  import AccordionMenu from '@/components/core/AccordionMenu.vue'
  export default {
    name: 'accordion-menu-page',
    components: {
      AccordionMenu
    },
    data () {
      return {
        title: 'Accordion Menu',
        menu: [
          {
            title: 'Zurb Vue',
            target: '/',
            mode: 'router',
            class: 'logo'
          },
          {
            title: 'Building Blocks',
            target: '#',
            mode: 'link',
            submenu: [
              {
                title: 'Post Footer',
                target: '/blog-post-footer',
                mode: 'router'
              },
              {
                title: 'Product Card',
                target: '/product-card',
                mode: 'router'
              }
            ]
          },
          {
            title: 'Components',
            target: '#',
            mode: 'router',
            submenu: [
              {
                title: 'Accordion',
                target: '/components/accordion',
                mode: 'router'
              },
              {
                title: 'Accordion Menu',
                target: '/components/accordion-menu',
                mode: 'router'
              },
              {
                title: 'Breadcrumbs',
                target: '/components/breadcrumbs',
                mode: 'router'
              },
              {
                title: 'Drilldown Menu',
                target: '/components/drilldown-menu',
                mode: 'router'
              },
              {
                title: 'Dropdown',
                target: '/components/dropdown',
                mode: 'router'
              },
              {
                title: 'Dropdown Menu',
                target: '/components/dropdown-menu',
                mode: 'router'
              },
              {
                title: 'Home Component',
                target: '/components/home',
                mode: 'router'
              },
              {
                title: 'Magellan',
                target: '/components/magellan',
                mode: 'router'
              },
              {
                title: 'Orbit',
                target: '/components/orbit',
                mode: 'router'
              },
              {
                title: 'Pagination',
                target: '/components/pagination',
                mode: 'router'
              },
              {
                title: 'Reveal',
                target: '/components/reveal',
                mode: 'router'
              },
              {
                title: 'Slider',
                target: '/components/slider',
                mode: 'router'
              },
              {
                title: 'Switch',
                target: '/components/switch',
                mode: 'router'
              },
              {
                title: 'Tabs',
                target: '/components/tabs',
                mode: 'router'
              },
              {
                title: 'Tooltip',
                target: '/components/tooltip',
                mode: 'router'
              }
            ]
          },
          {
            title: 'Helpers',
            target: '#',
            submenu: [
              {
                title: 'Standard Menu',
                target: '/standard-menu',
                mode: 'router'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
