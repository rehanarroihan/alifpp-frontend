<template>
  <main id="main">
    <section class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>News &amp; Event</h2>
          <ol>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>News &amp; Event</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="inner-page">
      <div class="container">
        <div class="row" v-cloak>
          <div class="col-lg-9 col-md-6">
            <div v-if="isPageLoading" class="d-flex justify-content-center align-items-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <p class="ml-4 mt-3">Memuat News &amp; Event...</p>
            </div>
            <template v-else>
              <PostItem
                v-for="(item, index) in postList"
                :key="'post' + index"
                :postId="item.id"
                :postSlug="item.slug"
                :postName="item.title.rendered"
                postWriter="admin"
                :postDate="item.date"
                postCat="News & Event"
                :postContent="item.excerpt.rendered"
              />
            </template>
          </div>
          <div class="col-lg-3 col-md-6 border">
            
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import PostItem from '@/components/PostItem.vue';

export default {
  head () {
    return {
      title: `News & Event - ${this.headTitle}`
    }
  },
  components: {
    PostItem,
  },
  data() {
    return {
      isPageLoading: false,
    };
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle,
      postList: (state) => state.global.newsAndEventPostList,
    }),
  },
  mounted() {
    if (this.postList.length == 0) {
      this.isPageLoading = true;
      this.getPostList().then((data) => {
        this.isPageLoading = false;
      });
    }
  },
  methods: {
    ...mapActions({
      getPostList: 'global/getNewsAndEventPostList',
    }),
  }
}
</script>

<style>
.border {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
</style>