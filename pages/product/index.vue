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
        <div v-if="isPageLoading" class="d-flex justify-content-center align-items-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p class="ml-4 mt-3">Memuat Detail Produk...</p>
        </div>
        <div class="row" v-else v-cloak>
          <div class="col-lg-9 col-md-6">
            <div class="d-flex">
              <img class="product-image" :src="productImage">
              <div>
                <h4>{{ productDetail.name }}</h4>
                <div v-html="productDetail.short_description"></div>
              </div>
            </div>
            <div class="mt-5" v-html="productDetail.description"></div>
          </div>
          <div class="col-lg-3 col-md-6 border">

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductDetail',
  head () {
    return {
      title: `${!this.productDetail.name ? 'Product Detail' : this.productDetail.name} - ${this.headTitle}`
    }
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle,
    }),
  },
  data() {
    return {
      isPageLoading: false,
      productDetail: {},
      productImage: '',
    };
  },
  watchQuery: ['id'],
  watchQuery(newQuery, oldQuery) {
    if (newQuery.id) {
      this.getProductDetail();
    }
  },
  mounted() {
    this.isPageLoading = true;
    this.getProductDetail();
  },
  methods: {
    async getProductDetail() {
      this.$axios.$get(`${process.env.API_BASE_URL}wc/v3/products/${this.$route.query.id}`, {
        auth: {
          username: process.env.WP_CONSUMER_KEY,
          password: process.env.WP_CONSUMER_SECRET
        }
      }).then((data) => {
        this.isPageLoading = false;
        this.productDetail = data;
        this.productImage = data.images[0].src;
      }).catch((err) => {
        this.isPageLoading = false;
      });
    }
  },
};
</script>

<style>
.border {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 460px;
  max-height: 333px;
}
</style>