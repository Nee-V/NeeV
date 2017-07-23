<template>
  <div :class="['switch', switchSize ? switchSize : '']">
    <input
      class="switch-input"
      :id="switchId"
      :type="switchMode"
      :name="switchName"
      :checked="switchChecked">
    <label class="switch-paddle" :for="switchId">
      <span class="show-for-sr">Download Kittens</span>
      <span class="switch-active" v-if="activeLabel" aria-hidden="true">{{ activeLabel }}</span>
      <span class="switch-inactive" v-if="inactiveLabel" aria-hidden="true">{{ inactiveLabel }}</span>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'toggle-switch',
    data () {
      return {
        switchId: this.id ? this.id : 'toggleSwitch',
        switchSize: this.size ? this.size : '',
        switchMode: this.mode ? this.mode : '',
        switchName: this.name ? this.name : '',
        switchChecked: this.checked ? this.checked : false,
        activeLabel: this.activeText ? this.activeText : 'Yes',
        inactiveLabel: this.inactiveText ? this.inactiveText : 'No',
        default: '',
        switchClass: ''
      }
    },
    props: {
      id: {
        type: String,
        default: () => 'toggleSwitch'
      },
      checked: {
        type: Boolean,
        default: () => false
      },
      size: {
        type: String,
        default: () => ''
      },
      mode: {
        type: String,
        default: () => 'checkbox'
      },
      name: {
        type: String,
        default: () => 'toggleSwitch'
      },
      activeText: {
        type: String,
        default: () => 'Yes'
      },
      inactiveText: {
        type: String,
        default: () => 'No'
      }
    }
  }
</script>
<style lang="scss">
  .switch {

  }
</style>
