<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-contact">
            <h3>CV. Alif Putra Perdana<span>.</span></h3>
            <p>
              Ruko Pepiland Blok A-06  <br>
              Jl. Jatisari Besar Pepelegi<br>
              Waru Sidoarjo, 61256 <br><br>
              <strong>Call Centre:</strong> +6281 656 2807<br>
              <strong>Telp/Fax:</strong> +6231 855 83611<br>
              <strong>Email:</strong> info@alifpp.com<br>
            </p>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Kategori Produk Kami</h4>
            <ul>
              <li v-for="(item, index) in navbarMenus[1].children" :key="'division'+index">
                <i class="bx bx-chevron-right"></i>
                <nuxt-link
                  :to="'/product-category?cat=' + item.object_id + '&slug=' + goSlug(item.title)"
                  data-toggle="tooltip"
                  :title="item.title"
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Sosial Media Kami</h4>
            <p>Cari tahu kami lebih lanjut di sosial media kami</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="copyright">
        &copy; Copyright <strong><span>BizLand</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>

<script>
 /* eslint-disable no-alert */
 import { mapState } from 'vuex';

export default {
  name: 'Footer',
  computed: {
    ...mapState({
      navbarMenus: (state) => state.global.navbarMenus,
    }),
  },
  methods: {
    goSlug(str) {
      //replace all special characters | symbols with a space
      str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
      
      // trim spaces at start and end of string
      str = str.replace(/^\s+|\s+$/gm,'');
      
      // replace space with dash/hyphen
      str = str.replace(/\s+/g, '-');	
      return str;
    },
  }
};
</script>

<style>
footer {
  box-shadow: 0px 0 18px 0 rgba(16, 110, 234, 0.1);
}
</style>
