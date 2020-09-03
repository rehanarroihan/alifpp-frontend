<template>
  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="member">
      <div class="member-img">
        <img :src="productImage" class="img-fluid" alt="">
      </div>
      <div class="member-info">
        <h4>{{ productName }}</h4>
        <span>Chief Executive Officer</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productImage: {
      type: String
    },
    productName: {
      type: String
    },
  }
};
</script>

<style scoped>

</style>