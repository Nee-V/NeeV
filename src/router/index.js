// Import Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Custom Components
import Hello from '@/components/core/Hello'
import Home from '@/components/core/Home'

// Foundation Core Components
import Accordion from '@/components/core/Accordion'
import AccordionMenu from '@/components/core/AccordionMenu'
import Breadcrumbs from '@/components/core/Breadcrumbs'
import DrilldownMenu from '@/components/core/DrilldownMenu'
import Dropdown from '@/components/core/Dropdown'
import DropdownMenu from '@/components/core/DropdownMenu'
import Magellan from '@/components/core/Magellan'
import Orbit from '@/components/core/Orbit'
import Pagination from '@/components/core/Pagination'
import Reveal from '@/components/core/Reveal'
import Slider from '@/components/core/Slider'
import Switch from '@/components/core/Switch'
import Tabs from '@/components/core/Tabs'
import Tooltip from '@/components/core/Tooltip'

// Foundation Building Blocks
import BlogPostFooter from '@/components/blocks/BlogPostFooter'
import ProductCard from '@/components/blocks/ProductCard'
import StandardMenu from '@/components/helpers/StandardMenu'

// Initialize Vue Router
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'standard-menu', path: '/standard-menu', component: StandardMenu },
    { name: 'Hello', path: '/', component: Hello },
    { name: 'Home', path: '/home', component: Home },
    { name: 'accordion', path: '/accordion', component: Accordion },
    { name: 'accordion-menu', path: '/accordion-menu', component: AccordionMenu },
    { name: 'breadcrumbs', path: '/breadcrumbs', component: Breadcrumbs },
    { name: 'drilldown-menu', path: '/drilldown-menu', component: DrilldownMenu },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'dropdown-menu', path: '/dropdown-menu', component: DropdownMenu },
    { name: 'magellan', path: '/magellan', component: Magellan },
    { name: 'orbit', path: '/orbit', component: Orbit },
    { name: 'pagination', path: '/pagination', component: Pagination },
    { name: 'reveal', path: '/reveal', component: Reveal },
    { name: 'slider', path: '/slider', component: Slider },
    { name: 'switch', path: '/switch', component: Switch },
    { name: 'tabs', path: '/tabs', component: Tabs },
    { name: 'tooltip', path: '/tooltip', component: Tooltip },
    { name: 'blog-post-footer', path: '/blog-post-footer', component: BlogPostFooter },
    { name: 'product-card', path: '/product-card', component: ProductCard }
  ]
})
