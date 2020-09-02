<template>
  <div>
    <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
      <div class="container d-flex">
        <div class="contact-info mr-auto">
          <i class="icofont-envelope"></i>
          <a href="mailto:support@alifpp.com">support@alifpp.com</a>
          <i class="icofont-phone"></i> +62 816562807
          <i class="icofont-fax"></i> +62 3185583611
        </div>
        <div class="social-links">
          <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
          <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
          <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
          <a href="#" class="skype"><i class="icofont-skype"></i></a>
          <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
        </div>
      </div>
    </div>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <img
          src="assets/img/alifpplogo.png"
          class="logo mr-3"
          style="height: 50px;
          padding: 0; margin: 0; border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);"
        />
        <h1 class="logo mr-auto"><a href="index.html">Alifpp<span>.</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt=""></a>-->

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <template v-for="(item, index) in navbarMenus">
              <li :key="index" v-if="item.children != null" class="drop-down">
                <nuxt-link :to="getRedirectLink(item.title)">
                  {{ item.title }}
                </nuxt-link>
                <ul>
                  <li v-for="(children, index) in item.children" :key="index">
                    <nuxt-link
                      :to="'/product-category/' + children.object_id + '/' + goSlug(children.title)"
                    >
                      {{ children.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li :key="index" v-if="item.children == null">
                <nuxt-link :to="getRedirectLink(item.title)">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </template>
          </ul>
        </nav><!-- .nav-menu -->

      </div>
    </header><!-- End Header -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState({
      navbarMenus: (state) => state.global.navbarMenus,
    }),
  },
  methods: {
    getRedirectLink(title) {
      let link = '';
      switch (title) {
        case 'Home':
          link = '/'
          break;
        case 'Product':
          link = '/product-category'
          break;
        case 'Brand':
          link = '/brand'
          break;
        case 'News & Events':
          link = '/news-event'
          break;   
        case 'About Us':
          link = '/about'
          break;     
      }
      return link;
    },
    goSlug(str) {
      //replace all special characters | symbols with a space
      str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
      
      // trim spaces at start and end of string
      str = str.replace(/^\s+|\s+$/gm,'');
      
      // replace space with dash/hyphen
      str = str.replace(/\s+/g, '-');	
      return str;
    }
  }
};
</script>

<style>

</style>
