<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h2>{{ title }}</h2>
      <p>Accordions are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
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
    </div>
    <div class="medium-10 medium-offset-1 columns">
      <h2>Settings</h2>
      <div id="debug-panel">

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Allow All Closed</h5>
              <toggle-switch id="allowAllClosed" name="allowAllClosed" :checked="allowAllClosed" v-model="allowAllClosed"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>By default, at least one pane in an accordion must be open. This can be changed by setting <small>allowAllClosed</small> option to <small>true</small>.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Deep Link</h5>
              <toggle-switch id="deepLink" name="deepLink" :checked="deepLink" v-model="deepLink"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Change the <small>deepLink</small> prop to <small>true</small> to allow users to open a particular accordion panel from URL attribute.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Deep Link Smudge</h5>
              <toggle-switch id="deepLinkSmudge" name="deepLinkSmudge" :checked="deepLinkSmudge" v-model="deepLinkSmudge"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>The <small>deepLinkSmudge</small> prop rolls the page up slightly after deep linking so that the accordion is at the top of the viewport.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Smudge Delay</h5>
              <input type="number" :value="deepLinkSmudgeDelay" v-model.number="deepLinkSmudgeDelay" name="deepLinkSmudgeDelay" id="deepLinkSmudgeDelay">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>The <small>deepLinkSmudgeDelay</small> prop adjusts the time before the <small>deepLinkSmudge</small> animation.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Multi Expand</h5>
              <toggle-switch id="multiExpand" name="multiExpand" :checked="multiExpand" v-model="multiExpand"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>By default, only one pane of an accordion can be open at a time. This can be changed by setting the <small>multiExpand</small> prop to <small>true</small>.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Slide Speed</h5>
              <input type="number" :value="slideSpeed" v-model.number="slideSpeed" name="slideSpeed" id="slideSpeed">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>The <small>slideSpeed</small> prop adjusts the time it takes for an accordion section animation.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Update History</h5>
              <toggle-switch id="updateHistory" name="updateHistory" :checked="updateHistory" v-model="updateHistory"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Change the <small>updateHistory</small> prop to <small>true</small> to modify the browser history via accordion section.</p>
            </div>
          </div>
        </div>

        <hr>

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
        multiExpand: false,
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
      this.equalizer = new Foundation.Equalizer($('.debug-row'), {
        equalizeByRow: true
      })
      $(document).resize(function () {
        var heights
        $('.debug-row').foundation('getHeights', heights)
        $('.debug-row').foundation('applyHeight', heights)
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
  .row {
    .columns {
      display: table;
      .content {
        vertical-align: middle;
        display: table-cell;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
</style>


