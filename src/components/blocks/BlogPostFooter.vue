<template>
  <div class="blogpost-footer">
    <!-- with icon font (fontawesome) -->
    <div class="blogpost-footer-actions">
      <div class="blogpost-footer-actions-left">
        <a href="#"><i class="fa fa-heart-o" aria-hidden="true"> 4</i></a>
        <a href="#"><i class="fa fa-comment-o" aria-hidden="true"> 2</i></a>
      </div>
      <div class="blogpost-footer-actions-right">
        <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="blogpost-footer-author-section">

      <div>
        <a href="#" class="blogpost-footer-author">
          <img class="avatar" src="http://fillmurray.com/200/200" alt="" />
          <div>
            <p class="author">{{ this.author }}</p>
            <p class="bio">{{ this.bio }}</p>
          </div>
        </a>
      </div>
      <a href="#" class="hollow button success">Follow</a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'blog-post-footer',
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
      author: 'Product Card',
      bio: 'Bill Murray is an American actor, comedian, and writer.'
    }
  },
  destroyed () {
    // Due to Selector Method destroy is disabled
    // this.tooltip.destroy();
  }
}
</script>

<style lang="scss" scoped>

.blogpost-footer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: rem-calc(29);
  border-bottom: 1px solid $medium-gray;
  padding: 1rem;

  @include breakpoint(medium) {
    padding: 1rem 0;
  }
}

.blogpost-footer-actions-left,
.blogpost-footer-actions-right {
  a,
  button {
    color: $black;
  }

  button:hover {
    cursor: pointer;
  }

  a + a,
  button + button {
    margin-left: 0.75rem;
  }
}

.blogpost-footer-author-section {
  padding: 1.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .button {
    border-radius: 5000px;
    padding: 0.875rem 1.75rem;
  }

  @include breakpoint(medium) {
    padding: 1.75rem 0;
  }
}


.blogpost-footer-author {
  display: flex;
  align-items: center;
  flex: 1 0 0;

  .avatar {
    border-radius: 50%;
    height: rem-calc(60);
    width: rem-calc(60);
  }

  .author {
    color: $black;
    margin-left: 0.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  .bio {
    margin-left: 0.75rem;
    margin-bottom: 0;
    color: $dark-gray;
  }
}


</style>
