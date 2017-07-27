<template>
  <div class="row">
    <div class="medium-12">
      <component :is="'accordion'"></component>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/core/Accordion'

export default {
  name: 'component-page',
  data () {
    return {

    }
  },
  components: {
    Accordion
  },
  props: {
    componentType: {
      type: String,
      default: () => 'accordion'
    },
    componentName: {
      type: String,
      default: () => 'Accordion'
    }
  },
  watch: {

  },
  methods: {

  },
  computed: {

  },
  mounted () {

  },
  detroyed () {

  }
}
</script>

<style lang="scss">
</style>
