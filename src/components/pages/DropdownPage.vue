<template>
  <div class="wrapper">
    <div class="row">
      <div class="medium-10 medium-offset-1 columns">
        <h2>{{ title }}</h2>
        <p>Dropdown panes are little happy sprites which can be revealed on click or hover.</p>
        <div class="callout success">
          <dropdown
            :button-text="buttonText"
            :content="content"
            :id="id"
            :hover="hover"
            :v-offset="vOffset"
            :h-offset="hOffset"
            :position="position"
            :alignment="alignment">
          </dropdown>
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
                <h5>Button Text</h5>
                <input type="text" :value="buttonText" v-model="buttonText" name="buttonText" id="buttonText">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>The text for the Dropdown trigger button.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>ID</h5>
                <input type="text" id="id" name="id" v-model="id" />
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>The ID of the dropdown.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Content</h5>
                <textarea rows="5" type="text" id="content" name="content" v-model="content"></textarea>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>The dropdown content.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Parent Class</h5>
                <input type="text" id="parentClass" name="parentClass" v-model="parentClass" />
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Class that designates bounding container of Dropdown.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Hover Delay</h5>
                <input type="number" :value="hoverDelay" v-model.number="hoverDelay" name="hoverDelay" id="hoverDelay">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Amount of time to delay opening a submenu on hover event.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Hover</h5>
                <toggle-switch id="hover" name="hover" :checked="hover" v-model="hover"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allow submenus to open on hover events.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Hover Pane</h5>
                <toggle-switch id="hoverPane" name="hoverPane" :checked="hoverPane" v-model="hoverPane"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Don't close dropdown when hovering over dropdown pane.</p>
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
                <h5>Position Class</h5>
                <input type="text" :value="positionClass" v-model="positionClass" name="positionClass" id="positionClass">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>DEPRECATED: Class applied to adjust open position.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Position</h5>
                <input type="text" :value="position" v-model="position" name="position" id="position">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Position of dropdown. Can be left, right, bottom, top, or auto.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>alignment</h5>
                <input type="text" :value="alignment" v-model="alignment" name="alignment" id="alignment">
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Allow Overlap</h5>
                <toggle-switch id="allowOverlap" name="allowOverlap" :checked="allowOverlap" v-model="allowOverlap"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Allow Bottom Overlap</h5>
                <toggle-switch id="allowBottomOverlap" name="allowBottomOverlap" :checked="allowBottomOverlap" v-model="allowBottomOverlap"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allow overlap of only the bottom of the container. This is the most common behavior for dropdowns, allowing the dropdown to extend the bottom of the screen but not otherwise influence or break out of the container.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Trap Focus</h5>
                <toggle-switch id="trapFocus" name="trapFocus" :checked="trapFocus" v-model="trapFocus"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="row debug-row" data-equalizer>
            <div class="medium-4 large-4 columns" data-equalizer-watch>
              <div class="content">
                <h5>Auto Focus</h5>
                <toggle-switch id="autoFocus" name="autoFocus" :checked="autoFocus" v-model="autoFocus"></toggle-switch>
              </div>
            </div>
            <div class="medium-8 large-8 columns" data-equalizer-watch>
              <div class="content">
                <p>Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.</p>
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

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Dropdown from '@/components/core/Dropdown.vue'
  import ToggleSwitch from '@/components/core/ToggleSwitch.vue'

  export default {
    name: 'dropdown-page',
    components: {
      Dropdown,
      ToggleSwitch
    },
    data () {
      return {
        title: 'Dropdown',
        id: 'dropdown',
        parentClass: '',
        hoverDelay: 250,
        hover: false,
        hoverPane: false,
        vOffset: '0',
        hOffset: '0',
        positionClass: '',
        position: 'auto',
        alignment: 'auto',
        allowOverlap: false,
        allowBottomOverlap: true,
        trapFocus: false,
        autoFocus: false,
        closeOnClick: false,
        buttonText: 'Toggle Dropdown',
        content: '<p>Just some sample content to fill a dropdown</p><p>Another paragraph.</p>'
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


