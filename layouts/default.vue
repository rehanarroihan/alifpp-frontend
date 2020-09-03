<template>
  <div>
    <MainLoading v-if="globalLoading" />
    <section v-else>
      <Header />
      <Nuxt />
      <Footer />
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState } from 'vuex';

import MainLoading from '@/components/MainLoading.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Layout',
  components: {
    MainLoading,
    Header,
    Footer,
  },
  async mounted() {
    Promise.all([
      this.getAllMenus(),
      this.parseProductCategory()
    ]).then((values) => {
      this.toggleGlobalLoading();
    });
  },
  methods: {
    ...mapActions({
      getAllMenus: 'global/getNavbarMenus',
      toggleGlobalLoading: 'global/toggleGlobalLoading',
      parseProductCategory: 'global/getAndParseProductCategory',
    }),
  },
  computed: {
    ...mapState({
      globalLoading: (state) => state.global.globalLoading,
    }),
  },
};
</script>

<style>

</style>
