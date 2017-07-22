<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
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
        <li class="accordion-item is-active" data-accordion-item>
          <a href="#" class="accordion-title">Accordion 1</a>
          <div class="accordion-content" data-tab-content>
            If you init Foundation in the component, this will work fine.
          </div>
        </li>
        <li class="accordion-item" data-accordion-item>
          <a href="#" class="accordion-title">Accordion 2</a>
          <div class="accordion-content" data-tab-content>
            I need to be clicked, in order to show up.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  mounted () {
    this.accordion = new Foundation.Accordion($('#accordion'))
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
      default: () => false
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
    }
  },
  destroyed () {
    this.accordion.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
