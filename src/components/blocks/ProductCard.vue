<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <div class="card card-product-hover">
        <img src="http://www.zurb.com/blog/system/images/690/original/blue_bw_web.jpg?1354921642" alt="sweet foundation shirt" />
        <div class="card-product-hover-icons">
          <a href="#"><i class="fa fa-shopping-cart"></i></a>
          <a href="#"><i class="fa fa-star-o"></i></a>
          <a href="#"><i class="fa fa-share-alt"></i></a>
        </div>
        <div class="card-product-hover-details">
          <h3 class="card-product-hover-title">Legacy Foundation Tee</h3>
          <span class="card-product-hover-price">$15.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  mounted () {
    // The following code works however only if showOn: 'all' is set.
    // This is a known bug: https://github.com/zurb/foundation-sites/issues/7554
    // Until this bug is fixed, Use the selector method
    // this.tooltip = new Foundation.Tooltip($('.has-tip'), {
    //   // These options can be declarative using the data attributes
    //   showOn: 'all',
    // });

    // Selector method
    // this.tooltip = $('.has-tip').foundation()
  },
  data () {
    return {
      msg: 'Product Card'
    }
  },
  destroyed () {
    // Due to Selector Method destroy is disabled
    // this.tooltip.destroy();
  }
}
</script>

<style lang="scss" scoped>

.card-product-hover-title {
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
}

.card-product-hover {
  position: relative;
  line-height: 1.2rem;
  transition: all 0.35s ease;
  max-width: 33.333333%;
}

.card-product-hover-details {
  -webkit-flex: 1 0 auto;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  padding: 1rem;
}

.card-product-hover-details > :last-child {
  margin-bottom: 0;
}

.card-product-hover-price {
  margin: 0.5rem 0;
  font-weight: 700;
  color: #1779ba;
  font-size: #1779ba;
}

.card-product-hover-icons {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.card-product-hover-icons a i {
  display: block;
  font-size: 1.5rem;
  line-height: 2.5rem;
  width: 2.5rem;
  background-color: #fefefe;
  text-align: center;
  color: #0a0a0a;
}

.card-product-hover-icons a i:hover {
  background-color: #8a8a8a;
  color: #fefefe;
  cursor: pointer;
}

.card-product-hover-icons a {
  margin: 2px;
  opacity: 0;
  -webkit-transform: translateY(50%);
      -ms-transform: translateY(50%);
          transform: translateY(50%);
  transition: all 0.35s ease;
}

.card-product-hover:hover a,
.card-product-hover.hover a {
  transition: all 0.35s ease;
  opacity: 1;
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
}

.card-product-hover:hover a:nth-child(2),
.card-product-hover.hover a:nth-child(2) {
  transition-delay: 0.1s;
}

.card-product-hover:hover a:nth-child(3),
.card-product-hover.hover a:nth-child(3) {
  transition-delay: 0.2s;
}


</style>
