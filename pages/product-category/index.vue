<template>
  <main id="main">
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Daftar Produk</h2>
          <ol>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>Daftar Produk</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h4 class="mb-4">Product Categories</h4>
            <template v-for="(item, index) in twoLevelProductCategory">
              <button 
                data-toggle="collapse"
                :data-target="'#child' + item.id"
                @click="loadProduct(item)"
                class="btn btn-cat btn-block text-left mb-2"
                :key="'catParent' +index"
              >
                {{ item.name }}
              </button>
              <div :id="'child' + item.id" class="collapse" :key="index">
                <a
                  v-for="(childItem, childIndex) in item.children"
                  :key="'catChild' +childIndex"
                  @click="loadProduct(childItem)"
                  class="btn btn-link btn-block text-left"
                >
                  {{ childItem.name }}
                </a>
              </div>
            </template>
          </div>

          <div class="col-lg-8 col-md-6">
            <!-- Loading circle -->
            <div
              v-if="isProductLoading"
              class="d-flex justify-content-center align-items-center"
            >
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <p class="ml-4 mt-3">Memuat Produk...</p>
            </div>
            <!-- Product list -->
            <div
              v-if="!isProductLoading && selectedCategory.products.length > 0"
              class="row team"
            >
              <template v-for="(prdItem, prdIndex) in selectedCategory.products">
                <ProductCard
                  :key="'product' + prdIndex"
                  :productImage="prdItem.images[0].src"
                  :productName="prdItem.name"
                />
              </template>
            </div>
            <!-- Empty state -->
            <div
              v-if="!isProductLoading && selectedCategory.products.length == 0"
              class="d-flex"
            >
              <p>Tidak ada produk dengan kategori <span class="text-purple">{{ selectedCategory.name }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductCategory',
  head () {
    return {
      title: `Product List - ${this.headTitle}`
    }
  },
  components: {
    ProductCard,
  },
  data() {
    return {
      isProductLoading: false,
      selectedCategory: {
        products: []
      },
    };
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle,
      twoLevelProductCategory: (state) => state.global.twoLevelProductCategory,
      allProductCategory: (state) => state.global.allProductCategory,
    }),
  },
  methods: {
    ...mapActions({
      getProductOfCategory: 'global/getProductOfCategory',
    }),
    loadProduct(item) {
      this.isProductLoading = true;
      this.getProductOfCategory(item).then((res) => {
        this.selectedCategory = res;
        this.isProductLoading = false;
      });
    },
  }
};
</script>

<style scoped>
.btn-cat {
  background-color: #f1f6fe;
  border-color: #f1f6fe;
  font-weight: 600;
}
.text-purple {
  color: #106eea;
}
</style>
