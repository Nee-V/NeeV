<template>
  <div class="wrapper">
    <div class="row">
      <div class="medium-10 medium-offset-1 columns">
        <h2>{{ title }}</h2>
        <p>Modal dialogs, or pop-up windows, are handy for prototyping and production. Foundation includes Reveal, our jQuery modal plugin, to make this easy for you.</p>
        <div class="callout success">
          <reveal
            :close-button="closeButton"
            :animation-in="animationIn"
            :animation-out="animationOut"
            :show-delay="showDelay"
            :hide-delay="hideDelay"
            :close-on-click="closeOnClick"
            :close-on-esc="closeOnEsc"
            :multiple-opened="multipleOpened"
            :v-offset="vOffset"
            :h-offset="hOffset"
            :full-screen="fullScreen"
            :bottom-offset-pct="bottomOffsetPct"
            :overlay="overlay"
            :reset-on-close="resetOnClose"
            :deep-link="deepLink"
            :update-history="updateHistory"
            :append-to="appendTo"
            :additional-overlay-classes="additionalOverlayClasses">
          </reveal>
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
                <h5>Close Button</h5>
                <toggle-switch id="closeButton" name="closeButton" :checked="closeButton" v-model="closeButton"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Whether the Reveal should have a close button.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Animation In</h5>
                <input type="text" :value="animationIn" v-model.number="animationIn" name="animationIn" id="animationIn">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Animation Out</h5>
                <input type="text" :value="animationOut" v-model.number="animationOut" name="animationOut" id="animationOut">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Show Delay</h5>
                <input type="number" :value="showDelay" v-model.number="showDelay" name="showDelay" id="showDelay">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Time, in ms, to delay the opening of a modal after a click if no animation used.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Hide Delay</h5>
                <input type="number" :value="hideDelay" v-model.number="hideDelay" name="hideDelay" id="hideDelay">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Time, in ms, to delay the closing of a modal after a click if no animation used.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Close on Click</h5>
                <toggle-switch id="closeOnClick" name="closeOnClick" :checked="closeOnClick" v-model="closeOnClick"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows a click on the body/overlay to close the modal.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Close on Escape</h5>
                <toggle-switch id="closeOnEsc" name="closeOnEsc" :checked="closeOnEsc" v-model="closeOnEsc"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the modal to close if the user presses the `ESCAPE` key.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Multiple Opened</h5>
                <toggle-switch id="multipleOpened" name="multipleOpened" :checked="multipleOpened" v-model="multipleOpened"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>If true, allows multiple modals to be displayed at once.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Vertical Offset</h5>
                <input type="text" :value="vOffset" v-model="vOffset" name="vOffset" id="vOffset">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Distance, in pixels, the modal should push down from the top of the screen.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Horizontal Offset</h5>
                <input type="text" :value="hOffset" v-model="hOffset" name="hOffset" id="hOffset">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Distance, in pixels, the modal should push in from the side of the screen.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Full Screen</h5>
                <toggle-switch id="fullScreen" name="fullScreen" :checked="fullScreen" v-model="fullScreen"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Bottom Offset Percent</h5>
                <input type="number" :value="bottomOffsetPct" v-model.number="bottomOffsetPct" name="bottomOffsetPct" id="bottomOffsetPct">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Percentage of screen height the modal should push up from the bottom of the view.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Overlay</h5>
                <toggle-switch id="overlay" name="overlay" :checked="overlay" v-model="overlay"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the modal to generate an overlay div, which will cover the view when modal opens.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Reset on Close</h5>
                <toggle-switch id="resetOnClose" name="resetOnClose" :checked="resetOnClose" v-model="resetOnClose"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.</p>
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
                <p>Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.</p>
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
                <p>Update the browser history with the open modal.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Append To</h5>
                <input type="text" :value="appendTo" v-model.number="appendTo" name="appendTo" id="appendTo">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows the modal to append to custom div.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Additional Overlay Classes</h5>
                <input type="text" :value="additionalOverlayClasses" v-model.number="additionalOverlayClasses" name="additionalOverlayClasses" id="additionalOverlayClasses">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allows adding additional class names to the reveal overlay.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Reveal from '@/components/core/Reveal.vue'
  import ToggleSwitch from '@/components/core/ToggleSwitch.vue'

  export default {
    name: 'reveal-page',
    components: {
      Reveal,
      ToggleSwitch
    },
    data () {
      return {
        title: 'Reveal',
        id: 'reveal',
        closeButton: true,
        animationIn: '',
        animationOut: '',
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: true,
        closeOnEsc: true,
        multipleOpened: false,
        vOffset: 'auto',
        hOffset: 'auto',
        fullScreen: false,
        bottomOffsetPct: 10,
        overlay: true,
        resetOnClose: false,
        deepLink: false,
        updateHistory: false,
        appendTo: 'body',
        additionalOverlayClasses: '',
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


