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
              <nuxt-link to="/product-category">Product Categories</nuxt-link>
            </li>
            <li>Detail Produk</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page">
      <div class="container">
        <div v-if="isPageLoading" id="preloader"></div>
        <section v-else>
          <h4>{{ productDetail.name }}</h4>
          <div v-html="productDetail.short_description"></div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    productName: {
      type: String,
    }
  },
  data() {
    return {
      isPageLoading: false,
      productDetail: {},
    };
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
    async getProductDetail() {
      this.$axios.$get(`${process.env.API_BASE_URL}wc/v3/products/${this.$route.params.id}`, {
        auth: {
          username: process.env.WP_CONSUMER_KEY,
          password: process.env.WP_CONSUMER_SECRET
        }
      }).then((data) => {
        this.productDetail = data;
      });
    }
  },
};
</script>

<style>

</style>