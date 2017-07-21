import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tabs from '@/components/Tabs'
import Orbit from '@/components/Orbit'
import Reveal from '@/components/Reveal'
import Dropdown from '@/components/Dropdown'
import Accordion from '@/components/Accordion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'Hello', path: '/', component: Hello },
    { name: 'accordion', path: '/accordion', component: Accordion },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'orbit', path: '/orbit', component: Orbit },
    { name: 'reveal', path: '/reveal', component: Reveal },
    { name: 'tabs', path: '/tabs', component: Tabs }
  ]
})
