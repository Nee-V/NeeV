<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h2>{{ title }}</h2>
      <p>Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>
      <div class="callout success">
        <orbit
          :auto-play="autoPlay"
          :slides="slides"
          :container-class="containerClass"
          :slide-class="slideClass"
          :box-of-bullets="boxOfBullets"
          :prev-class="prevClass"
          :next-class="nextClass"
          :anim-in-from-right="animInFromRight"
          :anim-out-to-right="animOutToRight"
          :anim-in-from-left="animInFromLeft"
          :anim-out-to-left="animOutToLeft"
          :geo-sync="geoSync"
          :accessible="accessible"
          :use-m-u-i="useMUI"
          :pause-on-hover="pauseOnHover"
          :swipe="swipe"
          :bullets="bullets"
          :infinite-wrap="infiniteWrap"
          :nav-buttons="navButtons"
          :timer-delay="timerDelay">
        </orbit>
      </div>
    </div>
    <div class="medium-10 medium-offset-1 columns">
      <h2>Settings</h2>
      <div id="debug-panel">

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Bullets</h5>
              <toggle-switch id="bullets" name="bullets" :checked="bullets" v-model="bullets"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows Orbit to automatically animate on page load.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Nav Buttons</h5>
              <toggle-switch id="navButtons" name="navButtons" :checked="navButtons" v-model="navButtons"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows Orbit to automatically animate on page load.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Anim In From Right</h5>
              <input id="animInFromRight" name="animInFromRight" v-model="animInFromRight" />
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Motion UI animation class to apply.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Anim Out To Right</h5>
              <input id="animOutToRight" name="animOutToRight" v-model="animOutToRight" />
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Motion UI animation class to apply.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Anim In From Left</h5>
              <input id="animInFromLeft" name="animInFromLeft" v-model="animInFromLeft" />
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Motion UI animation class to apply.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Anim Out To Left</h5>
              <input id="animOutToLeft" name="animOutToLeft" v-model="animOutToLeft" />
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Motion UI animation class to apply.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Auto Play</h5>
              <toggle-switch id="autoPlay" name="autoPlay" :checked="autoPlay" v-model="autoPlay"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows Orbit to automatically animate on page load.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Timer Delay</h5>
              <input id="timerDelay" name="timerDelay" v-model="timerDelay" />
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Amount of time, in ms, between slide transitions.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Infinite Wrap</h5>
              <toggle-switch id="infiniteWrap" name="infiniteWrap" :checked="infiniteWrap" v-model="infiniteWrap"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows Orbit to infinitely loop through the slides.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Swipe</h5>
              <toggle-switch id="swipe" name="swipe" :checked="swipe" v-model="swipe"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows the Orbit slides to bind to swipe events for mobile. This requires an additional mobile swipe utility library.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Pause on Hover</h5>
              <toggle-switch id="pauseOnHover" name="pauseOnHover" :checked="pauseOnHover" v-model="pauseOnHover"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows the timing function to pause animation on hover.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Accessible</h5>
              <toggle-switch id="accessible" name="accessible" :checked="accessible" v-model="accessible"></toggle-switch>
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Container Class</h5>
              <input id="containerClass" name="containerClass" :checked="containerClass" v-model="containerClass">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Class applied to the container of Orbit.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Slide Class</h5>
              <input id="slideClass" name="slideClass" :checked="slideClass" v-model="slideClass">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Class applied to individual slides.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Box of Bullets</h5>
              <input id="boxOfBullets" name="boxOfBullets" :checked="boxOfBullets" v-model="boxOfBullets">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Class applied to the bullet container.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Prev Class</h5>
              <input id="prevClass" name="prevClass" :checked="prevClass" v-model="prevClass">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Class applied to the `previous` navigation button.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Next Class</h5>
              <input id="nextClass" name="nextClass" :checked="nextClass" v-model="nextClass">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Class applied to the `next` navigation button.</p>
            </div>
          </div>
        </div>

        <hr>

        <div class="row debug-row" data-equalizer>
          <div class="medium-4 large-4 columns" data-equalizer-watch>
            <div class="content">
              <h5>Use MUI</h5>
              <input id="useMUI" name="useMUI" :checked="useMUI" v-model="useMUI">
            </div>
          </div>
          <div class="medium-8 large-8 columns" data-equalizer-watch>
            <div class="content">
              <p>Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Orbit from '@/components/core/Orbit.vue'
  import ToggleSwitch from '@/components/core/ToggleSwitch.vue'
  import VueNumeric from 'vue-numeric'

  export default {
    name: 'orbit-page',
    components: {
      Orbit,
      ToggleSwitch,
      VueNumeric
    },
    data () {
      return {
        title: 'Orbit',
        id: 'orbit',
        containerClass: 'orbit-container',
        slideClass: 'orbit-slide',
        boxOfBullets: 'orbit-bullets',
        prevClass: 'orbit-previous',
        nextClass: 'orbit-next',
        animInFromRight: 'slide-in-right',
        animOutToRight: 'slide-out-right',
        animInFromLeft: 'slide-in-left',
        animOutToLeft: 'slide-out-left',
        geoSync: '',
        accessible: true,
        useMUI: true,
        pauseOnHover: true,
        swipe: true,
        bullets: true,
        autoPlay: true,
        infiniteWrap: true,
        navButtons: true,
        slides: [
          {
            url: require('@/assets/img/orbit/01.jpg'),
            title: 'Space, the final frontier.',
            alt: 'Space'
          }, {
            url: require('@/assets/img/orbit/02.jpg'),
            title: 'Lets Rocket!',
            alt: 'Space'
          }, {
            url: require('@/assets/img/orbit/03.jpg'),
            title: 'Encapsulating',
            alt: 'Space'
          }, {
            url: require('@/assets/img/orbit/04.jpg'),
            title: 'Outta This World',
            alt: 'Space'
          }
        ],
        timerDelay: 500
      }
    },
    mounted () {
      this.equalizer = new Foundation.Equalizer($('.debug-row'), {
        equalizeByRow: true
      })
      $(document).resize(function () {
        var heights
        $('.debug-row').foundation('getHeights', heights)
        $('.debug-row').foundation('applyHeight', heights)
      })
    },
    destroyed () {
      this.equalizer.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .columns:last-of-type {
    float: left;
  }
  .row {
    .columns {
      display: table;
      .content {
        vertical-align: middle;
        display: table-cell;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
</style>


