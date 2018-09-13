import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    isLoading: true,
    // gamesInfo: null,
  },
  mutations: {
    setData(state, data) {
      // eslint-disable-next-line
      state.data = data;
    },
    setLoading(state, isLoading) {
      // eslint-disable-next-line
      state.isLoading = isLoading;
    },
  },
  getters: {
    getIsLoading: state => state.isLoading,
  },
  actions: {

  },
});
