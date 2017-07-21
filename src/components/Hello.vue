<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="button-group">
      <a class="button" href="https://vuejs.org" target="_blank">Core Docs</a>
      <a class="button" href="https://forum.vuejs.org" target="_blank">Forum</a>
      <a class="button" href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      <a class="button" href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      <a class="button" href="http://vuejs-templates.github.io/webpack/" target="_blank">Template Docs</a>
    </div>
    <h2>Ecosystem</h2>
    <div class="small button-group">
      <a class="button" href="http://router.vuejs.org/" target="_blank">vue-router</a>
      <a class="button" href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      <a class="button" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      <a class="button" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-group {
  list-style-type: none;
  padding: 0;
  display: inline-block;
}

.button-group > a {
  display: inline-block;
  margin: 0;
}
</style>
