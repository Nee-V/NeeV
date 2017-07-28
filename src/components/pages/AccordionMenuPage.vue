<template>
  <div class="wrapper">
    <div class="row">
      <div class="medium-10 medium-offset-1 columns">
        <h2>{{ title }}</h2>
        <p>You can use this component for creating menus based on the Zurb Foundation accordion menu.</p>
        <p>The only valid prop for the component at the moment is a menu array. Each item in the array MUST have a title and a target. They can also have an option class string for setting custom classes and a mode prop.</p>
        <p>The mode prop is for setting the internal link mode to use either the Vue Router or set a standard anchor tag. The options are 'router' (Default) and 'standard'.</p>
        <div class="callout success">
          <accordion-menu
            :menu="menu"
            :submenu-toggle="submenuToggle"
            :submenu-toggle-text="submenuToggleText"
            :slide-speed="slideSpeed"
            :multi-open="multiOpen"
            :mode="'router'">
          </accordion-menu>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="medium-10 medium-offset-1 columns">
        <div id="debug-panel" class="callout secondary">
          <h2>Settings</h2>
          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Slide Speed</h5>
                <input type="number" :value="slideSpeed" v-model.number="slideSpeed" name="slideSpeed" id="slideSpeed">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Amount of time to animate the opening of a submenu in ms.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Submenu Toggle</h5>
                <toggle-switch id="submenuToggle" name="submenuToggle" :checked="submenuToggle" v-model="submenuToggle"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Adds a separate submenu toggle button. This allows the parent item to have a link.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Submenu Toggle Text</h5>
                <input id="submenuToggleText" name="submenuToggleText" v-model="submenuToggleText" />
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>The text used for the submenu toggle if enabled. This is used for screen readers only.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Multi Open</h5>
                <toggle-switch id="multiOpen" name="multiOpen" :checked="multiOpen" v-model="multiOpen"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allow the menu to have multiple open panes.</p>
              </div>
            </div>
          </div>

          <hr>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import AccordionMenu from '@/components/core/AccordionMenu.vue'
  import ToggleSwitch from '@/components/core/ToggleSwitch.vue'
  export default {
    name: 'accordion-menu-page',
    components: {
      AccordionMenu,
      ToggleSwitch
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
          }
        ],
        multiOpen: true,
        submenuToggle: false,
        submenuToggleText: 'NeeV',
        slideSpeed: 250
      }
    }
  }
</script>

<style lang="scss" scoped></style>
