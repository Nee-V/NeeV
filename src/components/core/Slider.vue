<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <div
        v-bind:id="this.sliderID"
        v-bind:data-vertical="isVertical === true ? 'true' : 'false'"
        v-bind:class="[isVertical === true ? 'vertical' : '', isDisabled === true ? 'disabled' : '']"
        class="slider "
        data-slider
        v-bind:data-initial-start="this.dataValue"
        v-bind:data-end="this.dataEnd"
        v-bind:data-step="this.stepValue"
        >
        <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
        <span class="slider-fill" data-slider-fill></span>
        <input type="hidden" class="slider-input">
      </div>
      <p>Value: {{ dataValue }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Component name
  name: 'slider',
  // Component mounted hook
  mounted () {
    this.slider = new Foundation.Slider($('#' + this.sliderID), {
      // These options can be declarative using the data attributes
    })
    this.slider.$element.on('moved.zf.slider', () => {
      this.dataValue = this.slider.inputs.val()
    })
  },
  // Component data
  data () {
    return {
      msg: 'Slider',
      dataValue: this.currentValue ? this.currentValue : 0,
      dataEnd: 200,
      isVertical: this.verticalLayout ? this.verticalLayout : false,
      isDisabled: this.disabled ? this.disabled : false,
      stepValue: this.stepSize ? this.stepSize : 5,
      sliderID: this.sliderId ? this.sliderId : 'slider'
    }
  },
  // External component properties
  props: {
    currentValue: {
      type: Number,
      default: () => 60
    },
    verticalLayout: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    stepSize: {
      type: Number,
      default: () => 20
    },
    sliderId: {
      type: String,
      default: () => 'slider'
    }
  },
  // Component destroyed hook
  destroyed () {
    this.slider.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
