import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clubsInfo: null,
    gamesInfo: null,
  },
  mutations: {
    setClubs(state, clubs) {
      // eslint-disable-next-line
      state.clubsInfo = clubs;
    },
    setGames(state, games) {
      // eslint-disable-next-line
      state.gamesInfo = games;
    },
  },
  actions: {

  },
});
