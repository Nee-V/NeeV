<template>
  <div class="wrapper">
    <button class="button" type="button" :data-toggle="id">{{ buttonText }}</button>
    <div class="dropdown-pane top" :id="id" data-dropdown v-html="content"></div>
  </div>
</template>

<script>
let dropdownSettings = [
  'parentClass',
  'hoverDelay',
  'hover',
  'hoverPane',
  'vOffset',
  'hOffset',
  'positionClass',
  'position',
  'alignment',
  'allowOverlap',
  'allowBottomOverlap',
  'trapFocus',
  'autoFocus',
  'closeOnClick'
]
let i = 0

export default {
  name: 'dropdown',
  props: {
    buttonText: {
      type: String,
      default: () => 'Toggle Dropdown'
    },
    id: {
      type: String,
      default: () => 'dropdown'
    },
    content: {
      type: String,
      default: () => ''
    },
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
      type: String,
      default: () => '0'
    },
    hOffset: {
      type: String,
      default: () => '0'
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
  computed: {
    // Return our computed props for use in the mounted and watch methods
    props () {
      let newSettings = {}
      for (i = 0; i < dropdownSettings.length; i++) {
        newSettings[dropdownSettings[i]] = this.$props[dropdownSettings[i]]
      }
      return newSettings
    }
  },
  watch: {
    // Watch our props to re-init Accordion when a prop changes
    props: function (val) {
      $('#' + this.id).foundation('_destroy')
      this.dropdown.destroy()
      this.dropdown = new Foundation.Dropdown($('#' + this.id), this.props)
    }
  },
  mounted () {
    this.dropdown = new Foundation.Dropdown($('#' + this.id), this.props)
  },
  destroyed () {
    this.dropdown.destroy()
  }
}
</script>

<style lang="scss" scoped>
  .button {
    margin-bottom: 0;
  }
</style>
