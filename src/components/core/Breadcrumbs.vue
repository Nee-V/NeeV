<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
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
    </div>
  </div>
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
