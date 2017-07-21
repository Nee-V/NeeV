import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Home from '@/components/Home'

import Accordion from '@/components/Accordion'
import AccordionMenu from '@/components/AccordionMenu'
import DrilldownMenu from '@/components/DrilldownMenu'
import Dropdown from '@/components/Dropdown'
import DropdownMenu from '@/components/DropdownMenu'
import Magellan from '@/components/Magellan'
import Orbit from '@/components/Orbit'
import Reveal from '@/components/Reveal'
import Slider from '@/components/Slider'
import Tabs from '@/components/Tabs'
import Tooltip from '@/components/Tooltip'

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
