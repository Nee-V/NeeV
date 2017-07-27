<template>
  <div class="wrapper">
    <ul :id="id" :class="['tabs', expandTabs ? 'expanded' : '']" data-tabs>
      <li :class="[linkClass, index === 0 ? linkActiveClass : '']" v-for="(panel, index) in panels"><a :href="'#panel' + index + 'd'">{{ panel.title }}</a></li>
    </ul>

    <div class="tabs-content" data-tabs-content="tabs">
      <div :class="[panelClass, index === 0 ? panelActiveClass : '']" :id="'panel' + index + 'd'" v-for="(panel, index) in panels">
        <p>{{ panel.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
let tabSettings = [
  'deepLink',
  'deepLinkSmudge',
  'deepLinkSmudgeDelay',
  'updateHistory',
  'autoFocus',
  'wrapOnKeys',
  'matchHeight',
  'activeCollapse',
  'linkClass',
  'linkActiveClass',
  'panelClass',
  'panelActiveClass'
]

export default {
  name: 'tabs',
  mounted () {
    this.tabs = new Foundation.Tabs($('#' + this.id), this.props)
  },
  computed: {
    // Return our computed props for use in the mounted and watch methods
    props () {
      let newSettings = {}
      for (var i = 0; i < tabSettings.length; i++) {
        newSettings[tabSettings[i]] = this.$props[tabSettings[i]]
      }
      return newSettings
    }
  },
  watch: {
    // Watch our props to re-init Accordion when a prop changes
    props: function (val) {
      this.tabs = new Foundation.Tabs($('#' + this.id), this.props)
    }
  },
  data () {
    return {
      msg: 'Tabs'
    }
  },
  props: {
    id: {
      type: String,
      default: () => 'tabs'
    },
    expandTabs: {
      type: Boolean,
      default: () => false
    },
    deepLink: {
      type: Boolean,
      default: () => true
    },
    deepLinkSmudge: {
      type: Boolean,
      default: () => false
    },
    deepLinkSmudgeDelay: {
      type: Number,
      default: () => 300
    },
    updateHistory: {
      type: Boolean,
      default: () => false
    },
    autoFocus: {
      type: Boolean,
      default: () => false
    },
    wrapOnKeys: {
      type: Boolean,
      default: () => true
    },
    matchHeight: {
      type: Boolean,
      default: () => false
    },
    activeCollapse: {
      type: Boolean,
      default: () => false
    },
    linkClass: {
      type: String,
      default: () => 'tabs-title'
    },
    linkActiveClass: {
      type: String,
      default: () => 'is-active'
    },
    panelClass: {
      type: String,
      default: () => 'tabs-panel'
    },
    panelActiveClass: {
      type: String,
      default: () => 'is-active'
    },
    panels: {
      type: Array,
      default: []
    }
  },
  destroyed () {
    this.tabs.destroy()
  }
}
</script>

<style lang="scss" scoped>
  .tabs.expanded {
    display: table;
    width: 100%;
    li {
      float: none;
      display: table-cell;
      vertical-align: middle;
      outline: 0;
    }
  }
</style>
