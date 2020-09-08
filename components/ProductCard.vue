<template>
  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
    <nuxt-link :to="'/product?id=' + productId + '&slug=' + productSlug">
      <div class="product">
        <div class="product-img">
          <img :src="productImage" class="img-fluid" alt="">
        </div>
        <div class="product-info">
          <h4>{{ productName }}</h4>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productId: {
      type: Number
    },
    productImage: {
      type: String
    },
    productName: {
      type: String
    },
    productSlug: {
      type: String
    }
  }
};
</script>

<style scoped>
.product {
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(16, 110, 234, 0.15);
  min-height: 300px;
}

.product-img {
  position: relative;
  overflow: hidden;
  object-fit: cover;
  min-height: 220px;
  max-height: 220px;
}

.product-info {
  padding: 25px 15px;
}

.product-info h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
  color: #222222;
}

.product-info span {
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #aaaaaa;
}

.product-info p {
  font-style: italic;
  font-size: 14px;
  line-height: 26px;
  color: #777777;
}
</style>