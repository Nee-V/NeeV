<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <ul class="sidebar-menu" data-close="offCanvas">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/home" exact>Home</router-link></li>
        <li><router-link to="/reveal" exact>Reveal</router-link></li>
        <li><router-link to="/slider" exact>Slider</router-link></li>
        <li><router-link to="/tooltip" exact>Tooltip</router-link></li>
        <li><router-link to="/dropdown-menu" exact>Dropdown Menu</router-link></li>
        <li><router-link to="/drilldown-menu" exact>Drilldown Menu</router-link></li>
        <li><router-link to="/accordion-menu" exact>Accordion Menu</router-link></li>
        <li><router-link to="/magellan" exact>Magellan</router-link></li>
        <li><router-link to="/accordion" exact>Accordion</router-link></li>
        <li><router-link to="/dropdown" exact>Dropdown</router-link></li>
        <li><router-link to="/tabs" exact>Tabs</router-link></li>
        <li><router-link to="/orbit" exact>Orbit</router-link></li>
      </ul>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <top-bar :left-menu="mainMenu" :title="title" :menu-mode="mode"><a class="button small menu-button hide-for-medium" data-toggle="offCanvas">Menu</a></top-bar>

      <div class="content-wrapper">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import TopBar from './components/core/TopBar.vue'

export default {
  name: 'app',
  data () {
    return {
      title: 'Zurb Vue',
      target: '/',
      mode: 'router',
      mainMenu: [
        {
          title: 'Zurb Vue',
          target: '/',
          mode: 'router',
          class: 'logo'
        },
        {
          title: 'Building Blocks',
          target: '#',
          mode: 'link',
          submenu: [
            {
              title: 'Post Footer',
              target: '/blog-post-footer',
              mode: 'router'
            },
            {
              title: 'Product Card',
              target: '/product-card',
              mode: 'router'
            }
          ]
        },
        {
          title: 'Components',
          target: '#',
          mode: 'link',
          submenu: [
            {
              title: 'Accordion',
              target: '/accordion',
              mode: 'router'
            },
            {
              title: 'Accordion Menu',
              target: '/accordion-menu',
              mode: 'router'
            },
            {
              title: 'Breadcrumbs',
              target: '/breadcrumbs',
              mode: 'router'
            },
            {
              title: 'Drilldown Menu',
              target: '/drilldown-menu',
              mode: 'router'
            },
            {
              title: 'Dropdown',
              target: '/dropdown',
              mode: 'router'
            },
            {
              title: 'Dropdown Menu',
              target: '/dropdown-menu',
              mode: 'router'
            },
            {
              title: 'Home Component',
              target: '/home',
              mode: 'router'
            },
            {
              title: 'Magellan',
              target: '/magellan',
              mode: 'router'
            },
            {
              title: 'Orbit',
              target: '/orbit',
              mode: 'router'
            },
            {
              title: 'Pagination',
              target: '/pagination',
              mode: 'router'
            },
            {
              title: 'Reveal',
              target: '/reveal',
              mode: 'router'
            },
            {
              title: 'Slider',
              target: '/slider',
              mode: 'router'
            },
            {
              title: 'Switch',
              target: '/switch',
              mode: 'router'
            },
            {
              title: 'Tabs',
              target: '/tabs',
              mode: 'router'
            },
            {
              title: 'Tooltip',
              target: '/tooltip',
              mode: 'router'
            }
          ]
        },
        {
          title: 'Helpers',
          target: '#',
          submenu: [
            {
              title: 'Standard Menu',
              target: '/standard-menu',
              mode: 'router'
            }
          ]
        }
      ]
    }
  },
  components: {
    TopBar
  },
  mounted () {
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'))
    this.dropdownMenu = new Foundation.DropdownMenu($('#mainDropDown'))
  }
}
</script>

<style lang="scss">
  @import './styles/global';
  body {
    background-color: $light-gray;
  }
  .off-canvas-content .content-wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
  }

  // Chrome Reset
  a:focus {
    outline: none;
  }

  .logo, .logo a {
    color: $white;
    font-weight: normal;
  }

  li a.menu-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    float: right;
  }

  .content-wrapper {
    padding: 0.75rem 0;
  }

  .sidebar-menu {
    @include menu-base();
    @include menu-direction(vertical);
    a {
      color: $secondary-color;
      font-weight: normal;
    }
    a.active {
      font-weight: 600;
      color: $primary-color;
    }
  }
</style>
