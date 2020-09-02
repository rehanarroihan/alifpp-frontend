
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/img/alifpp.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
      { rel: 'stylesheet', href: 'assets/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'assets/vendor/icofont/icofont.min.css' },
      { rel: 'stylesheet', href: 'assets/vendor/boxicons/css/boxicons.min.css' },
      { rel: 'stylesheet', href: 'assets/vendor/owl.carousel/assets/owl.carousel.min.css' },
      { rel: 'stylesheet', href: 'assets/vendor/venobox/venobox.css' },
      { rel: 'stylesheet', href: 'assets/vendor/aos/aos.css' },
      { rel: 'stylesheet', href: 'assets/css/style.css' },
    ],
    script: [
      { src: 'assets/vendor/jquery/jquery.min.js' },
      { src: 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: 'assets/vendor/jquery.easing/jquery.easing.min.js' },
      { src: 'assets/vendor/php-email-form/validate.js' },
      { src: 'assets/vendor/waypoints/jquery.waypoints.min.js' },
      { src: 'assets/vendor/counterup/counterup.min.js' },
      { src: 'assets/vendor/owl.carousel/owl.carousel.min.js' },
      { src: 'assets/vendor/isotope-layout/isotope.pkgd.min.js' },
      { src: 'assets/vendor/venobox/venobox.min.js' },
      { src: 'assets/vendor/aos/aos.js' },
      { src: 'assets/js/main.js' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  env: {
    API_BASE_URL: 'https://cms.alifpp.com/wp-json/',
    WP_CONSUMER_KEY: 'ck_94936cb0dcf843aada6366baec779d5ec52812b2',
    WP_CONSUMER_SECRET: 'cs_2e40f9da28329e403516b2ab449e0012e250ce97'
  }
}
