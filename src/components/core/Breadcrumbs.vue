<template>
  <nav aria-label="You are here:" role="navigation">
    <ul class="breadcrumbs">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li class="disabled">Gene Splicing</li>
      <li>
        <span class="show-for-sr">Current: </span> Cloning
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'breadcrumbs',
    data () {
      return {

      }
    }
  }
</script>
