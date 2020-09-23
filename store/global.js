export const state = () => ({
  headTitle: 'CV. Alif Putra Perdana',
  globalLoading: true,
  navbarMenus: [],
  allProductCategory: [],
  twoLevelProductCategory: [],
  categoriesWithProducts: [],
  newsAndEventPostList: [],
  vision: "Kami adalah perusahaan penyedia alat monitoring lingkungan, lingkungan Kerja, kesehatan kerja dan uji keamanan pangan yang terbaik dan bisa bermanfaat bagi kehidupan"
});

export const mutations = {
  setNavbarMenus(state, payload) {
    state.navbarMenus = payload;
  },
  setGlobalLoading(state, payload) {
    if (payload !== null) {
      state.globalLoading = payload;
    } else {
      state.globalLoading = !state.globalLoading;
    }
  },
  setAllProductCategory(state, payload) {
    state.allProductCategory = payload;
  },
  setTwoLevelProductCategory(state, payload) {
    state.twoLevelProductCategory = payload;
  },
  pushCategoriesWithProducts(state, payload) {
    state.categoriesWithProducts.push(payload);
  },
  setNewsAndEventPostList(state, payload) {
    state.newsAndEventPostList = payload;
  }
};

export const actions = {
  getNavbarMenus(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`${process.env.API_BASE_URL}wp-api-menus/v2/menus/5`)
        .then((data) => {
          context.commit('setNavbarMenus', data.items);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  toggleGlobalLoading(context, payload) {
    context.commit('setGlobalLoading', payload);
  },
  getAndParseProductCategory(context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`${process.env.API_BASE_URL}wc/v3/products/categories?per_page=100`, {
        auth: {
          username: process.env.WP_CONSUMER_KEY,
          password: process.env.WP_CONSUMER_SECRET
        }
      }).then((data) => {
        context.commit('setAllProductCategory', data);
        // NOTE : grouping categories by parents
        let catParents = [];
        data.map((cat) => {
          // NOTE : Gathering parents (cat with parent === 0)
          if (cat.parent === 0) {
            if (cat.name !== 'Lain-lain' && cat.name !== 'Uncategorized')
              catParents.push(cat);
          }
        });
        // NOTE : inserting children to their parents
        data.map((cats) => {
          if (cats.parent !== 0) {
            let parent = catParents.find(element => element.id == cats.parent);
            if (typeof parent != 'undefined') {
              if (typeof parent.children == 'undefined') {
                Object.assign(parent, { children: [] });
              }
              parent.children.push(cats);
            }
          }
        });
        context.commit('setTwoLevelProductCategory', catParents);
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  getProductOfCategory(context, payload) {
    return new Promise((resolve, reject) => {
      let cats = context.state.categoriesWithProducts.find(itm => itm.id === payload.id);
      if (typeof cats != 'undefined') {
        // Just return the category data with its product
        resolve(cats);
      } else {
        // Push the the cat data and get products from server
        this.$axios.$get(`${process.env.API_BASE_URL}wc/v3/products?category=${payload.id}`, {
          auth: {
            username: process.env.WP_CONSUMER_KEY,
            password: process.env.WP_CONSUMER_SECRET
          }
        }).then((data) => {
          let categoryWithProducts = JSON.parse(JSON.stringify(payload));
          Object.assign(categoryWithProducts, { products: data });

          context.commit('pushCategoriesWithProducts', categoryWithProducts);
          resolve(categoryWithProducts);
        });
      }
    })
  },
  getNewsAndEventPostList(context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`${process.env.API_BASE_URL}wp/v2/posts`, {
        auth: {
          username: process.env.WP_CONSUMER_KEY,
          password: process.env.WP_CONSUMER_SECRET
        },
        params: {
          categories: 31
        },
      }).then((data) => {
        context.commit('setNewsAndEventPostList', data);
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
