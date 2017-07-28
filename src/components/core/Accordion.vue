<template>
  <div class="wrapper">
    <ul
      :id="id"
      class="accordion"
      data-accordion>
      <accordion-tab v-for="(panel, index) in panels" :index="index" :panel="panel" :key="index":class="[index === 0 ? 'is-active' : '', 'accordion-item']"></accordion-tab>
    </ul>
  </div>
</template>

<script>
import AccordionTab from './Accordion/AccordionTab.vue'

let accordionSettings = [
  'slideSpeed',
  'multiExpand',
  'allowAllClosed',
  'deepLink',
  'deepLinkSmudge',
  'deepLinkSmudgeDelay',
  'updateHistory'
]

export default {
  name: 'accordion',
  mounted () {
    // Initialize the Accordion once the component has been mounted
    this.accordion = new Foundation.Accordion($('#' + this.id), this.props)
  },
  computed: {
    // Return our computed props for use in the mounted and watch methods
    props () {
      let newSettings = {}
      for (var i = 0; i < accordionSettings.length; i++) {
        newSettings[accordionSettings[i]] = this.$props[accordionSettings[i]]
      }
      return newSettings
    }
  },
  watch: {
    // Watch our props to re-init Accordion when a prop changes
    props: function (val) {
      this.accordion = new Foundation.Accordion($('#' + this.id), this.props)
    }
  },
  components: {
    // Initialize our sub components
    AccordionTab
  },
  data () {
    return {
      msg: 'Accordion'
    }
  },
  props: {
    id: {
      type: String,
      default: () => 'accordion'
    },
    // All of the default Accordion JS options, available as props
    slideSpeed: {
      type: Number,
      default: () => 250
    },
    multiExpand: {
      type: Boolean,
      default: () => false
    },
    allowAllClosed: {
      type: Boolean,
      default: () => false
    },
    deepLink: {
      type: Boolean,
      default: () => true
    },
    deepLinkSmudge: {
      type: Boolean,
      default: () => false
    },
    deepLinkSmudgeDelay: {
      type: Number,
      default: () => 300
    },
    updateHistory: {
      type: Boolean,
      default: () => false
    },
    // Our Accordion panels, these are currently not 'watched' for re-initialization.
    panels: {
      type: Array,
      default: () => [
        {
          title: 'Accordion 1',
          content: 'If you init Foundation in the component, this will work fine.'
        },
        {
          title: 'Accordion 2',
          content: 'I need to be clicked, in order to show up.'
        }
      ]
    }
  },
  destroyed () {
    // Destroy our Accordion instance
    this.accordion.destroy()
  }
}
</script>

<style lang="scss" scoped>
  .accordion {
    margin-bottom: 0;
  }
</style>
