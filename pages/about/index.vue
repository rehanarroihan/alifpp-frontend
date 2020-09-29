<template>
  <main id="main">
    <section class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>About Us</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="inner-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-6 col-sm-12">
            <h4>CV. Alif Putra Perdana</h4>
            <h5 class="mb-5">Tentang Kami</h5>
            <h5>Visi</h5>
            <p>{{ vision }}</p>
            <h5>Misi</h5>
            <ul>
              <li v-for="(missionItem, missionIndex) in missionList" :key="'mission' + missionIndex">
                {{ missionItem }}
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head () {
    return {
      title: `About Us - ${this.headTitle}`
    }
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle,
      vision: (state) => state.global.vision,
      missionList: (state) => state.global.mission,
    }),
  },
}
</script>

<style>

</style>