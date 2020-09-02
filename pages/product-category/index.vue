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
                class="btn btn-cat btn-block text-left mb-2"
                :key="index"
              >
                {{ item.name }}
              </button>
              <div :id="'child' + item.id" class="collapse" :key="index">
                <a
                  v-for="(childItem, childIndex) in item.children"
                  :key="childIndex"
                  href="#" class="btn btn-link btn-block text-left"
                >
                  {{ childItem.name }}
                </a>
              </div>
            </template>
          </div>
          <div class="col-lg-4 col-md-6">
            
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductCategory',
  head () {
    return {
      title: `Product List - ${this.headTitle}`
    }
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle,
      twoLevelProductCategory: (state) => state.global.twoLevelProductCategory, 
      allProductCategory: (state) => state.global.allProductCategory, 
    }),
  }
};
</script>

<style scoped>
.btn-cat {
  background-color: #f1f6fe;
  border-color: #f1f6fe;
  font-weight: 600;
}
</style>
