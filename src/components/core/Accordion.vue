<template>
  <ul
    id="accordion"
    class="accordion"
    data-accordion
    v-bind:data-slide-speed="speed"
    v-bind:data-multi-expand="multi"
    v-bind:data-allow-all-closed="allClosed"
    v-bind:data-deep-link="dL"
    v-bind:data-deep-link-smudge="dLSmudge"
    v-bind:data-deep-link-smudge-delay="dLSmudgeDelay"
    v-bind:data-update-history="history">
    <accordion-tab v-for="(panel, index) in panels" :index="index" :panel="panel" :key="index":class="[index === 0 ? 'is-active' : '', 'accordion-item']"></accordion-tab>
  </ul>
</template>

<script>
import AccordionTab from './Accordion/AccordionTab.vue'

export default {
  name: 'accordion',
  mounted () {
    this.accordion = new Foundation.Accordion($('#accordion'))
  },
  components: {
    AccordionTab
  },
  data () {
    return {
      msg: 'Accordion',
      speed: this.slideSpeed ? this.slideSpeed : 250,
      multi: this.multiExpand ? this.multiExpand : false,
      allClosed: this.allowAllClosed ? this.allowAllClosed : false,
      dL: this.deepLink ? this.deepLink : false,
      dLSmudge: this.deepLinkSmudge ? this.deepLinkSmudge : false,
      dLSmudgeDelay: this.deepLinkSmudgeDelay ? this.deepLinkSmudgeDelay : 300,
      history: this.updateHistory ? this.updateHistory : false
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
    this.accordion.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
