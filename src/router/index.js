import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tabs from '@/components/Tabs'
import Tooltip from '@/components/Tooltip'
import Magellan from '@/components/Magellan'
import DropdownMenu from '@/components/DropdownMenu'
import Orbit from '@/components/Orbit'
import Reveal from '@/components/Reveal'
import Slider from '@/components/Slider'
import DrilldownMenu from '@/components/DrilldownMenu'
import Dropdown from '@/components/Dropdown'
import Accordion from '@/components/Accordion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'Hello', path: '/', component: Hello },
    { name: 'accordion', path: '/accordion', component: Accordion },
    { name: 'drilldown-menu', path: '/drilldown-menu', component: DrilldownMenu },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'dropdown-menu', path: '/dropdown-menu', component: DropdownMenu },
    { name: 'magellan', path: '/magellan', component: Magellan },
    { name: 'orbit', path: '/orbit', component: Orbit },
    { name: 'reveal', path: '/reveal', component: Reveal },
    { name: 'slider', path: '/slider', component: Slider },
    { name: 'tooltip', path: '/tooltip', component: Tooltip },
    { name: 'tabs', path: '/tabs', component: Tabs }
  ]
})
