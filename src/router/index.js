// Import Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Custom Components
import Hello from '@/components/core/Hello'
import Home from '@/components/core/Home'

// Foundation Core Components
import Breadcrumbs from '@/components/core/Breadcrumbs'
import DrilldownMenu from '@/components/core/DrilldownMenu'
import Dropdown from '@/components/core/Dropdown'
import DropdownMenu from '@/components/core/DropdownMenu'
import Magellan from '@/components/core/Magellan'
import Orbit from '@/components/core/Orbit'
import Pagination from '@/components/core/Pagination'
import Reveal from '@/components/core/Reveal'
import Slider from '@/components/core/Slider'
import ToggleSwitch from '@/components/core/ToggleSwitch'
// import Tabs from '@/components/core/Tabs'
import Tooltip from '@/components/core/Tooltip'

// Foundation Building Blocks
import BlogPostFooter from '@/components/blocks/BlogPostFooter'
import ProductCard from '@/components/blocks/ProductCard'
import StandardMenu from '@/components/helpers/StandardMenu'

// Pages
import AccordionPage from '@/components/pages/AccordionPage'
import AccordionMenuPage from '@/components/pages/AccordionMenuPage'
import Components from '@/components/pages/Components'
import TabsPage from '@/components/pages/TabsPage'

// Initialize Vue Router
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'standard-menu', path: '/standard-menu', component: StandardMenu },
    { name: 'components-page', path: '/components', component: Components },
    { name: 'Hello', path: '/', component: Hello },
    { name: 'Home', path: '/components/home', component: Home },
    { name: 'accordion', path: '/components/accordion', component: AccordionPage },
    { name: 'accordion-menu', path: '/components/accordion-menu', component: AccordionMenuPage },
    { name: 'breadcrumbs', path: '/components/breadcrumbs', component: Breadcrumbs },
    { name: 'drilldown-menu', path: '/components/drilldown-menu', component: DrilldownMenu },
    { name: 'dropdown', path: '/components/dropdown', component: Dropdown },
    { name: 'dropdown-menu', path: '/components/dropdown-menu', component: DropdownMenu },
    { name: 'magellan', path: '/components/magellan', component: Magellan },
    { name: 'orbit', path: '/components/orbit', component: Orbit },
    { name: 'pagination', path: '/components/pagination', component: Pagination },
    { name: 'reveal', path: '/components/reveal', component: Reveal },
    { name: 'slider', path: '/components/slider', component: Slider },
    { name: 'switch', path: '/components/switch', component: ToggleSwitch },
    { name: 'tabs', path: '/components/tabs', component: TabsPage },
    { name: 'tooltip', path: '/components/tooltip', component: Tooltip },
    { name: 'blog-post-footer', path: '/blog-post-footer', component: BlogPostFooter },
    { name: 'product-card', path: '/product-card', component: ProductCard }
  ]
})
