<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h2>{{ title }}</h2>
      <div class="callout success">
        <accordion
          :panels="panels"
          :slide-speed="slideSpeed"
          :allow-all-closed="allowAllClosed"
          :multi-expand="multiExpand"
          :deep-link="deepLink"
          :deep-link-smudge="deepLinkSmudge"
          :deep-link-smudge-delay="deepLinkSmudgeDelay"
          :update-history="updateHistory">
        </accordion>
      </div>
      <div id="debug-panel" class="row" data-equalizer>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Allow All Closed</h3>
          <toggle-switch id="allowAllClosed" name="allowAllClosed" :checked="allowAllClosed" v-model="allowAllClosed"></toggle-switch>
        </div>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Deep Link</h3>
          <toggle-switch id="deepLink" name="deepLink" :checked="deepLink" v-model="deepLink"></toggle-switch>
        </div>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Deep Link Smudge</h3>
          <toggle-switch id="deepLinkSmudge" name="deepLinkSmudge" :checked="deepLinkSmudge" v-model="deepLinkSmudge"></toggle-switch>
        </div>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Smudge Delay</h3>
          <input type="number" :value="deepLinkSmudgeDelay" v-model.number="deepLinkSmudgeDelay" name="deepLinkSmudgeDelay" id="deepLinkSmudgeDelay">
        </div>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Multi Expand</h3>
          <toggle-switch id="multiExpand" name="multiExpand" :checked="multiExpand" v-model="multiExpand"></toggle-switch>
        </div>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Slide Speed</h3>
          <input type="number" :value="slideSpeed" v-model.number="slideSpeed" name="slideSpeed" id="slideSpeed">
        </div>
        <div class="medium-6 large-4 columns" data-equalizer-watch>
          <h3>Update History</h3>
          <toggle-switch id="updateHistory" name="updateHistory" :checked="updateHistory" v-model="updateHistory"></toggle-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Accordion from '@/components/core/Accordion.vue'
  import ToggleSwitch from '@/components/core/ToggleSwitch.vue'
  import VueNumeric from 'vue-numeric'
  export default {
    name: 'accordion-page',
    components: {
      Accordion,
      ToggleSwitch,
      VueNumeric
    },
    data () {
      return {
        title: 'Accordion',
        slideSpeed: 250,
        multiExpand: true,
        allowAllClosed: false,
        deepLink: true,
        deepLinkSmudge: false,
        deepLinkSmudgeDelay: 300,
        updateHistory: false,
        panels: [
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
    mounted () {
      this.equalizer = new Foundation.Equalizer($('#debug-panel'), {
        equalizeByRow: true
      })
      $(document).resize(function () {
        var heights
        $('#debug-panel').foundation('getHeightsByRow', heights)
        $('#debug-panel').foundation('applyHeight', heights)
      })
    },
    destroyed () {
      this.equalizer.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .columns:last-of-type {
    float: left;
  }
</style>


