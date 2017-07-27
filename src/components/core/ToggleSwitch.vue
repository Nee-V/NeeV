<template>
  <div :class="['switch', switchSize ? switchSize : '']">
    <input v-if="switchMode === 'checkbox'"
      class="switch-input"
      v-model="value"
      :checked="checked"
      :id="switchId"
      type="checkbox"
      :name="switchName">
    <input v-else-if="switchMode === 'radios'"
      class="switch-input"
      v-model="value"
      :checked="checked"
      :id="switchId"
      type="radio"
      :name="switchName">
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
    watch: {
      value (val) {
        this.$emit('input', val)
      },
      checked (val) {
        this.value = val
      }
    },
    data () {
      return {
        switchId: this.id ? this.id : 'toggleSwitch',
        switchSize: this.size ? this.size : '',
        switchMode: this.mode ? this.mode : '',
        switchName: this.name ? this.name : '',
        activeLabel: this.activeText ? this.activeText : 'Yes',
        inactiveLabel: this.inactiveText ? this.inactiveText : 'No',
        default: '',
        switchClass: '',
        value: null
      }
    },
    methods: {
      onChange (event) {
        this.$emit('input', event.target.checked)
      }
    },
    beforeMount () {
      this.value = this.checked
    },
    mounted () {
      this.$emit('input', this.value)
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
</style>
