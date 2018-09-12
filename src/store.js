import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    // gamesInfo: null,
  },
  mutations: {
    setData(state, data) {
      // eslint-disable-next-line
      state.data = data;
    },
    // setGames(state, games) {
    //   // eslint-disable-next-line
    //   state.gamesInfo = games;
    // },
  },
  actions: {

  },
});
