export const state = () => ({
  globalLoading: true,
  navbarMenus: [],
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
};

export const actions = {
  getNavbarMenus(context) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('https://cms.alifpp.com/wp-json/wp-api-menus/v2/menus/5')
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
};
