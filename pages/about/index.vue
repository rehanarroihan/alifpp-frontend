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
            <h6>Visi</h6>
            <p>Kami adalah perusahaan Penyedia Alat Monitoring Lingkungan, Lingkungan Kerja, Kesehatan Kerja Dan Uji Keamanan Pangan Yang Terbaik Di Indonesia Timur Dan Bisa Bermanfaat Bagi Kehidupan</p>
            <h6>Misi</h6>
            <ul>
              <li>Menjual Alat Monitoring Lingkungan, Lingkungan Kerja, Kesehatan Kerja Dan Uji Keamanan Pangan Yang Berkualitas Dan Memenuhi Standar Yang Ada</li>
              <li>Memberikan Pelayanan Terbaik Kepada Pelanggan</li>
              <li>Memberikan Kesejahteraan Dan Kenyamanan Dalam Bekerja Bagi Seluruh Pemangku Kepentingan</li>
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
    }),
  },
}
</script>

<style>

</style>