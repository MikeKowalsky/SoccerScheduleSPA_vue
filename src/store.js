import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    isLoading: true,
  },
  mutations: {
    APPLY_DATA(state, data) {
      console.log('in APPLY_DATA');
      // eslint-disable-next-line
      state.data = data;
    },
    SET_LOADING(state, isLoading) {
      // eslint-disable-next-line
      state.isLoading = isLoading;
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  actions: {
    FETCH_DATA({ commit }, { self }) {
      axios.get('https://gitcdn.xyz/cdn/drraq/PremierLeague.json/fe4e3e1bc5ea4661b3f93720da7e96befdbf9d7b/data.json') // get clubs info
        .then((response) => {
          commit('APPLY_DATA', response.data); // set the data in the store
          commit('SET_LOADING', false); // set isLoading to false in the store
          // console.log(state.data);
          // console.log(`isLoading: ${state.isLoading}`);
          self.printData();
        })
        // eslint-disable-next-line
        .catch(error => console.log(error + " > in fetch/store")); // handle error
    },
  },
});
