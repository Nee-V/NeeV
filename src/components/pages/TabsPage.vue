<template>
  <div class="wrapper">
    <div class="row">
      <div class="medium-10 medium-offset-1 columns">
        <h2>{{ title }}</h2>
        <p>Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
        <div class="callout success">
          <tabs
            :panels="panels"
            :id="id"
            :auto-focus="autoFocus"
            :wrap-on-keys="wrapOnKeys"
            :match-height="matchHeight"
            :active-collapse="activeCollapse"
            :deep-link="deepLink"
            :deep-link-smudge="deepLinkSmudge"
            :deep-link-smudge-delay="deepLinkSmudgeDelay"
            :link-class="linkClass"
            :link-active-class="linkActiveClass"
            :panel-class="panelClass"
            :panel-active-class="panelActiveClass"
            :update-history="updateHistory"
            :expand-tabs="expandTabs">
          </tabs>
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
                <h5>Auto Focus</h5>
                <toggle-switch id="autoFocus" name="autoFocus" :checked="autoFocus" v-model="autoFocus"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the window to scroll to content of active pane on load if set to true. Not recommended if more than one tab panel per page.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Expand Tabs</h5>
                <toggle-switch id="expandTabs" name="expandTabs" :checked="expandTabs" v-model="expandTabs"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Makes the tab links evenly distibute across the container.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Wrap On Keys</h5>
                <toggle-switch id="wrapOnKeys" name="wrapOnKeys" :checked="wrapOnKeys" v-model="wrapOnKeys"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows keyboard input to 'wrap' around the tab links.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Match Height</h5>
                <toggle-switch id="matchHeight" name="matchHeight" :checked="matchHeight" v-model="matchHeight"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the tab content panes to match heights if set to true.</p>
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
                <p>Update the browser history with the open tab.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Active Collapse</h5>
                <toggle-switch id="activeCollapse" name="activeCollapse" :checked="activeCollapse" v-model="activeCollapse"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows active tabs to collapse when clicked.</p>
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
                <p>Allows the window to scroll to content of pane specified by hash anchor.</p>
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
                <p>Adjust the deep link scroll to make sure the top of the tab panel is visible.</p>
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
                <p>Animation time (ms) for the deep link adjustment.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Link Class</h5>
                <input type="text" :value="linkClass" v-model="linkClass" name="linkClass" id="linkClass">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Class applied to `li`'s in tab link list.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Link Active Class</h5>
                <input type="text" :value="linkActiveClass" v-model="linkActiveClass" name="linkActiveClass" id="linkActiveClass">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Class applied to the active `li` in tab link list.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Panel Class</h5>
                <input type="text" :value="panelClass" v-model="panelClass" name="panelClass" id="panelClass">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Class applied to the content containers.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Panel Active Class</h5>
                <input type="text" :value="panelActiveClass" v-model="panelActiveClass" name="panelActiveClass" id="panelActiveClass">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Class applied to the active content container.</p>
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
  import Tabs from '@/components/core/Tabs.vue'
  import ToggleSwitch from '@/components/core/ToggleSwitch.vue'
  import VueNumeric from 'vue-numeric'
  export default {
    name: 'accordion-page',
    components: {
      Tabs,
      ToggleSwitch,
      VueNumeric
    },
    data () {
      return {
        title: 'Tabs',
        id: 'tabs',
        deepLink: true,
        deepLinkSmudge: false,
        deepLinkSmudgeDelay: 300,
        updateHistory: false,
        autoFocus: false,
        wrapOnKeys: true,
        expandTabs: false,
        matchHeight: false,
        activeCollapse: false,
        linkClass: 'tabs-title',
        linkActiveClass: 'is-active',
        panelClass: 'tabs-panel',
        panelActiveClass: 'is-active',
        panels: [
          {
            title: 'Tab 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            title: 'Tab 2',
            content: 'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.'
          },
          {
            title: 'Tab 3',
            content: 'Curabitur sit amet dolor vitae justo vulputate semper in quis ipsum. Proin dignissim, eros vitae aliquet pellentesque, tortor odio molestie felis, in tempor lectus metus nec lacus.'
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


