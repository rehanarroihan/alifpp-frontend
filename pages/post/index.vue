<template>
  <main id="main">
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Detail Produk</h2>
          <ol>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product-category">News &amp; Event</nuxt-link>
            </li>
            <li>Detail Event / News</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page">
      <div class="container">
        <div v-if="isPageLoading" class="d-flex justify-content-center align-items-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p class="ml-4 mt-3">Memuat Konten...</p>
        </div>
        <div class="row" v-else v-cloak>
          <div class="col-lg-9 col-md-6">
            <PostItem
              :postId="postDetail.id"
              :postSlug="postDetail.slug"
              :postName="postDetail.title.rendered"
              postWriter="admin"
              :postDate="postDetail.date"
              postCat="News &amp; Event"
              :postContent="postDetail.content.rendered"
            />
          </div>
          <div class="col-lg-3 col-md-6 border">

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  name: 'PostDetail',
  data() {
    return {
      isPageLoading: true,
      postDetail: {},
    };
  },
  watchQuery: ['id'],
  watchQuery(newQuery, oldQuery) {
    if (newQuery.id) {
      this.getPostDetail();
    }
  },
  mounted() {
    this.isPageLoading = true;
    this.getPostDetail();
  },
  methods: {
    async getPostDetail() {
      this.$axios.$get(`${process.env.API_BASE_URL}wp/v2/posts/${this.$route.query.id}`, {
        auth: {
          username: process.env.WP_CONSUMER_KEY,
          password: process.env.WP_CONSUMER_SECRET
        },
      }).then((data) => {
        this.isPageLoading = false;
        this.postDetail = data;
      }).catch((err) => {
        this.isPageLoading = false;
      });
    }
  },
}
</script>

<style>

</style>