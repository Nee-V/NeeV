// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

window.jQuery = jQuery
window.$ = jQuery

require('motion-ui')
require('what-input')
require('foundation-sites')
require('font-awesome/css/font-awesome.css')
Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    componentLayout: 'vertical'
  },
  mutations: {
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
