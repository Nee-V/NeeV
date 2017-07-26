<template>
  <div class="wrapper">
    <button class="button" type="button" data-toggle="dropdown">Toggle Dropdown</button>
    <div class="dropdown-pane top" id="dropdown" data-dropdown>
      Example form in a dropdown.
      <form>
        <div class="row">
          <div class="medium-6 columns">
            <label>Name
              <input type="text" placeholder="Kirk, James T.">
            </label>
          </div>
          <div class="medium-6 columns">
            <label>Rank
              <input type="text" placeholder="Captain">
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    parentClass: {
      type: String,
      default: () => ''
    },
    hoverDelay: {
      type: Number,
      default: () => 250
    },
    hover: {
      type: Boolean,
      default: () => false
    },
    hoverPane: {
      type: Boolean,
      default: () => false
    },
    vOffset: {
      type: Number,
      default: () => 0
    },
    hOffset: {
      type: Number,
      default: () => 0
    },
    positionClass: {
      type: String,
      default: () => ''
    },
    position: {
      type: String,
      default: () => 'auto'
    },
    alignment: {
      type: String,
      default: () => 'auto'
    },
    allowOverlap: {
      type: Boolean,
      default: () => false
    },
    allowBottomOverlap: {
      type: Boolean,
      default: () => true
    },
    trapFocus: {
      type: Boolean,
      default: () => false
    },
    autoFocus: {
      type: Boolean,
      default: () => false
    },
    closeOnClick: {
      type: Boolean,
      default: () => false
    }
  },
  mounted () {
    this.dropdown = new Foundation.Dropdown($('#dropdown'), {
      // These options can be declarative using the data attributes
      parentClass: this.$props.parentClass,
      hoverDelay: this.$props.hoverDelay,
      hover: this.$props.hover,
      hoverPane: this.$props.hoverPane,
      vOffset: this.$props.vOffset,
      hOffset: this.$props.hOffset,
      positionClass: this.$props.positionClass,
      position: this.$props.position,
      alignment: this.$props.alignment,
      allowOverlap: this.$props.allowOverlap,
      allowBottomOverlap: this.$props.allowBottomOverlap,
      trapFocus: this.$props.trapFocus,
      autoFocus: this.$props.autoFocus,
      closeOnClick: this.$props.closeOnClick
    })
  },
  destroyed () {
    this.dropdown.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
