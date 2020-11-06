<template>
  <div>
    <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
      <div class="container d-flex">
        <div class="contact-info mr-auto">
          <i class="icofont-envelope"></i>
          <a href="mailto:info@alifpp.com">info@alifpp.com</a>
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
          src="https://alifpp.com/assets/img/alifpplogo.png"
          class="logo mr-3 emblem"
        />
        <h1 class="logo mr-auto">
          <nuxt-link class="main-title" to="/">
            <p>CV. Alif Putra Perdana</p>
            <p>We care...</p>
          </nuxt-link>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt=""></a>-->

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <template v-for="(item, index) in navbarMenus">
              <!-- NOTE : menu that have children such as Product and Brand -->
              <li
                :key="'menuParent' + index"
                v-if="item.children != null" 
                class="drop-down"
              >
                <nuxt-link :to="getRedirectLink(item.title)">
                  {{ item.title }}
                </nuxt-link>
                <ul>
                  <template v-for="(children, childIdx) in item.children">
                    <!-- NOTE : menu childred that have children -->
                    <li
                      :key="'menuChild' + childIdx"
                      v-if="children.children != null"
                      class="drop-down"
                    >
                      <nuxt-link
                        :to="'/product-category?cat=' + children.object_id + '&slug=' + goSlug(children.title)"
                      >
                        {{ children.title }}
                      </nuxt-link>
                      <ul>
                        <template v-for="(childrenChilItem, childrenChilIdx) in children.children">
                          <!-- NOTE : have childred -->
                          <li
                            :key="'menuChildChild' + childrenChilIdx"
                            v-if="childrenChilItem.children != null" 
                            class="drop-down"
                          >
                            <nuxt-link
                              :to="'/product-category?cat=' + childrenChilItem.object_id + '&slug=' + goSlug(childrenChilItem.title)"
                              data-toggle="tooltip"
                              :title="childrenChilItem.title"
                            >
                              {{ textTruncate(childrenChilItem.title, 34, '...') }}
                            </nuxt-link>
                            <ul>
                              <li
                                v-for="(childrenChildItem, childrenChildIdx) in childrenChilItem.children"
                                :key="'menuChildChildes' + childrenChildIdx"
                              >
                                <nuxt-link
                                  :to="'/product-category?cat=' + childrenChildItem.object_id + '&slug=' + goSlug(childrenChildItem.title)"
                                  data-toggle="tooltip"
                                  :title="childrenChildItem.title"
                                >
                                  {{ textTruncate(childrenChildItem.title, 34, '...') }}
                                </nuxt-link>
                              </li>
                            </ul>
                          </li>
                          <!-- NOTE : don't have childred -->
                          <li
                            v-else
                            :key="'menuChildChild' + childrenChilIdx"
                          >
                            <nuxt-link
                              :to="'/product-category?cat=' + childrenChilItem.object_id + '&slug=' + goSlug(childrenChilItem.title)"
                              data-toggle="tooltip"
                              :title="childrenChilItem.title"
                            >
                              {{ textTruncate(childrenChilItem.title, 34, '...') }}
                            </nuxt-link>
                          </li>
                        </template>
                      </ul>
                    </li>
                    <!-- NOTE : menu childred that have no children -->
                    <li :key="'menuChild' + childIdx" v-else>
                      <nuxt-link
                        :to="'/product-category?cat=' + children.object_id + '&slug=' + goSlug(children.title)"
                      >
                        {{ children.title }}
                      </nuxt-link>
                    </li>
                  </template>
                  
                </ul>
              </li>
              <!-- NOTE : menu that have no children -->
              <li :key="'menuParent' + index" v-if="item.children == null">
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
          link = '/product-category?cat=51&slug=brand'
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
    },
    textTruncate(str, maxLength, ending) {
      const text = String(str);
      const strLength = text.length;
      let textString = '';
      if (strLength > maxLength) {
        textString = text.substring(0, maxLength - String(ending).length) + ending;
      } else {
        textString = text;
      }
      return textString;
    },
  }
};
</script>

<style lang="scss">
.emblem {
  height: 50px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.main-title {

  p:first-child {
    font-size: 24px;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 2px
  }

  p:last-child {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    /* left: -90%; */
    left: -100%!important;
    right: 100%!important;
  }
}
</style>
