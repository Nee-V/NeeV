<template>
  <li
    v-bind:class="[index === 0 ? 'is-active' : '', 'accordion-item']"
    data-accordion-item>
    <a v-bind:href="[dL === true ? '#accordion-' + (index + 1) : '#']" class="accordion-title">{{ panel.title }}</a>
    <div class="accordion-content" data-tab-content>
      {{ panel.content }}
    </div>
  </li>
</template>

<script>
  export default {
    name: 'accordion-tab',
    data () {
      return {
        dL: this.deepLink ? this.deepLink : false,
        tabIndex: this.index ? this.index : 0
      }
    },
    props: {
      index: {
        type: Number,
        default: () => 0
      },
      panel: {
        type: Object,
        default: () => {}
      },
      deepLink: {
        type: Boolean,
        default: () => true
      }
    }
  }
</script>

<style lang="scss">
</style>
