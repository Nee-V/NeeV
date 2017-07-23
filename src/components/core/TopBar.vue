<template>
<nav>
  <div class="top-bar" id="responsive-menu">
    <div class="top-bar-left">
      <ul class="menu dropdown" id="main-dropdown-menu" data-dropdown-menu>
        <li v-for="link in leftMenu" v-if="link.target" v-bind:class="[link.class ? link.class : '']">
          <router-link
            v-if="(link.mode === 'router' || (menuMode === 'router' && link.mode !== 'standard')) && link.target"
            v-bind:to="link.target" exact>
            {{ link.title }}
          </router-link>
          <a
            v-else
            v-bind:href="link.target">
            {{ link.title }}
          </a>
          <ul class="menu vertical" v-if="link.submenu" data-submenu>
            <li v-for="link in link.submenu">
              <router-link
                v-if="(link.mode === 'router' || (menuMode === 'router' && link.mode !== 'standard')) && link.target"
                v-bind:to="link.target" exact>
                {{ link.title }}
              </router-link>
              <a
                v-else
                v-bind:href="link.target">
                {{ link.title }}
              </a>
            </li>
          </ul>
        </li>
        <li v-else v-bind:class="[link.class ? link.class : '']">
          {{ link.title }}
        </li>
      </ul>
    </div>
    <div class="top-bar-right">

    </div>
  </div>

</nav>
</template>

<script>
  module.exports = {
    name: 'top-bar',
    data: function () {
      return {
        menuTitle: this.title ? this.title : '',
        menuMode: this.mode ? this.mode : 'links',
        left: [],
        right: []
      }
    },
    mounted () {
      this.dropdownMenu = new Foundation.DropdownMenu($('#main-dropdown-menu'), {
        // These options can be declarative using the data attributes
        hoverDelay: 300
      })
    },
    destroyed () {
      this.dropdownMenu.destroy()
    },
    props: {
      title: {
        type: String,
        default: () => ''
      },
      mode: {
        type: String,
        default: () => 'router'
      },
      leftMenu: {
        type: Array,
        default: () => []
      },
      rightMenu: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    border-bottom: 2px solid $primary-color;
    .dropdown {
      .is-dropdown-submenu {
        width: 350px;
        border: none;
        .is-submenu-item {
          width: 50%;
          float: left;
          &:hover {
            background-color: $primary-color;
            a {
              color: $light-gray;
            }
          }
        }
      }
    }
  }
</style>
