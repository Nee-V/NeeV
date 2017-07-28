<template>
  <div class="row">
    <div class="medium-8 medium-offset-2 columns">
      <h2>Accordion</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Accordions are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
          <accordion></accordion>
          <hr>
        </div>
      </div>
      <h2>Accordion Menu</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <accordion-menu :menu="mainMenu" :submenuToggle="false"></accordion-menu>
          <hr>
        </div>
      </div>
      <h2>Breadcrumbs</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Breadcrumbs come in handy to show a navigation trail for users clicking through your site.</p>
          <breadcrumbs></breadcrumbs>
          <hr>
        </div>
      </div>
      <h2>Drilldown Menu</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Drilldown is one of Foundation's three menu patterns, which converts a series of nested lists into a vertical drilldown menu.</p>
          <drilldown-menu :menu="mainMenu"></drilldown-menu>
          <hr>
        </div>
      </div>
      <h2>Dropdown</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Dropdown panes are little happy sprites which can be revealed on click or hover.</p>
          <dropdown></dropdown>
          <hr>
          <h2>Dropdown Menu</h2>
          <dropdown-menu :menu="mainMenu"></dropdown-menu>
          <hr>
          <h2>Magellan</h2>
          <p>Magellan allows you to create navigation that tracks the active section of a page your user is in.</p>
          <magellan></magellan>
          <hr>
          <h2>Orbit</h2>
          <p>An image and content carousel with animation support and many customizable options.</p>
          <orbit></orbit>
          <hr>
          <h2>Pagination</h2>
          <p>Pagination is a type of navigation that lets users click through pages of search results, products, or other related items.</p>
          <pagination></pagination>
          <hr>
        </div>
      </div>
      <h2>Reveal</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Modal dialogs, or pop-up windows, are handy for prototyping and production.</p>
          <reveal :closeButton="true">
            <h1>Awesome. I Have It.</h1>
            <p class="lead">Your couch. It is mine.</p>
            <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
          </reveal>
          <hr>
        </div>
      </div>
      <h2>Slider</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>This handy lil slider is perfect for setting specific values within a range.</p>
          <slider></slider>
          <hr>
        </div>
      </div>
      <h2>Switch</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Create pure CSS3 On/Off switches with animated transitions. A massive turn on for your users.</p>
          <h4>Checkboxes</h4>
          <toggle-switch :id="'switchOne'" :name="'switchOne'" :size="'tiny'"></toggle-switch>
          <toggle-switch :id="'switchTwo'" :name="'switchTwo'" :size="'small'" :checked="true"></toggle-switch>
          <toggle-switch :id="'switchThree'" :name="'switchThree'"></toggle-switch>
          <toggle-switch
            :id="'switchFour'"
            :size="'large'"
            :activeText="'On'"
            :inactiveText="'Off'"
            :mode="'checkbox'"
            :name="'switchFour'"
            :checked="true"></toggle-switch>
          <h4>Radios</h4>
          <toggle-switch
            :activeText="'On'"
            :inactiveText="'Off'"
            :id="'radioSwitchOne'"
            :name="'radioSwitchGroup'"
            :size="'large'"
            :mode="'radio'">
          </toggle-switch>
          <toggle-switch
            :activeText="'On'"
            :inactiveText="'Off'"
            :id="'radioSwitchTwo'"
            :name="'radioSwitchGroup'"
            :size="'large'"
            :checked="true"
            :mode="'radio'">
          </toggle-switch>
          <hr>
        </div>
      </div>
      <h2>Tabs</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
          <tabs></tabs>
          <hr>
        </div>
      </div>
      <h2>Tooltip</h2>
      <div class="row">
        <div class="medium-10 medium-offset-1 columns">
          <p>Tooltips? More like Cooltips. But really though, tooltips are nifty for displaying extended information for a term or action on a page.</p>
          <tooltip></tooltip>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Foundation Core Components
import Accordion from '@/components/core/Accordion'
import AccordionMenu from '@/components/core/AccordionMenu'
import Breadcrumbs from '@/components/core/Breadcrumbs'
import DrilldownMenu from '@/components/core/DrilldownMenu'
import Dropdown from '@/components/core/Dropdown'
import DropdownMenu from '@/components/core/DropdownMenu'
import Magellan from '@/components/core/Magellan'
import Orbit from '@/components/core/Orbit'
import Pagination from '@/components/core/Pagination'
import Reveal from '@/components/core/Reveal'
import Slider from '@/components/core/Slider'
import ToggleSwitch from '@/components/core/ToggleSwitch'
import Tabs from '@/components/core/Tabs'
import Tooltip from '@/components/core/Tooltip'

export default {
  name: 'components-page',
  data () {
    return {
      mainMenu: [
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
          target: '/components',
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
      ]

    }
  },
  components: {
    Accordion,
    AccordionMenu,
    Breadcrumbs,
    DrilldownMenu,
    Dropdown,
    DropdownMenu,
    Magellan,
    Orbit,
    Pagination,
    Reveal,
    Slider,
    ToggleSwitch,
    Tabs,
    Tooltip
  }
}
</script>
<style lang="scss" scoped>
</style>
