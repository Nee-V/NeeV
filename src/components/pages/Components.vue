<template>
  <div class="row">
    <div class="medium-8 medium-offset-2 columns">
      <h2>Accordion</h2>
      <p>Accordions are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
      <accordion></accordion>
      <hr>
      <h2>Accordion Menu</h2>
      <accordion-menu></accordion-menu>
      <hr>
      <h2>Breadcrumbs</h2>
      <p>Breadcrumbs come in handy to show a navigation trail for users clicking through your site.</p>
      <breadcrumbs></breadcrumbs>
      <hr>
      <h2>Drilldown Menu</h2>
      <p>Drilldown is one of Foundation's three menu patterns, which converts a series of nested lists into a vertical drilldown menu.</p>
      <drilldown-menu></drilldown-menu>
      <hr>
      <h2>Dropdown</h2>
      <p>Dropdown panes are little happy sprites which can be revealed on click or hover.</p>
      <dropdown></dropdown>
      <hr>
      <h2>Dropdown Menu</h2>
      <dropdown-menu></dropdown-menu>
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
      <h2>Reveal</h2>
      <p>Modal dialogs, or pop-up windows, are handy for prototyping and production.</p>
      <reveal></reveal>
      <hr>
      <h2>Slider</h2>
      <p>This handy lil slider is perfect for setting specific values within a range.</p>
      <slider></slider>
      <hr>
      <h2>Switch</h2>
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
      <h2>Tabs</h2>
      <p>Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
      <tabs></tabs>
      <hr>
      <h2>Tooltip</h2>
      <p>Tooltips? More like Cooltips. But really though, tooltips are nifty for displaying extended information for a term or action on a page.</p>
      <tooltip></tooltip>
      <hr>
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
