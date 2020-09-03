<template>
  <div id="preloader"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainLoading',
  head () {
    return {
      title: this.headTitle
    }
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle,
    }),
  },
}
</script>

<style>

</style>