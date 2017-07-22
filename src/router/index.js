import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/core/Hello'
import Home from '@/components/core/Home'

import Accordion from '@/components/core/Accordion'
import AccordionMenu from '@/components/core/AccordionMenu'
import DrilldownMenu from '@/components/core/DrilldownMenu'
import Dropdown from '@/components/core/Dropdown'
import DropdownMenu from '@/components/core/DropdownMenu'
import Magellan from '@/components/core/Magellan'
import Orbit from '@/components/core/Orbit'
import Reveal from '@/components/core/Reveal'
import Slider from '@/components/core/Slider'
import Tabs from '@/components/core/Tabs'
import Tooltip from '@/components/core/Tooltip'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'Hello', path: '/', component: Hello },
    { name: 'Home', path: '/home', component: Home },
    { name: 'accordion', path: '/accordion', component: Accordion },
    { name: 'accordion-menu', path: '/accordion-menu', component: AccordionMenu },
    { name: 'drilldown-menu', path: '/drilldown-menu', component: DrilldownMenu },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'dropdown-menu', path: '/dropdown-menu', component: DropdownMenu },
    { name: 'magellan', path: '/magellan', component: Magellan },
    { name: 'orbit', path: '/orbit', component: Orbit },
    { name: 'reveal', path: '/reveal', component: Reveal },
    { name: 'slider', path: '/slider', component: Slider },
    { name: 'tabs', path: '/tabs', component: Tabs },
    { name: 'tooltip', path: '/tooltip', component: Tooltip }
  ]
})
