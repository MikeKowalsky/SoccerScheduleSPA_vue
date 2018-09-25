import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    isLoading: true,
    currentUser: null,
  },
  mutations: {
    APPLY_DATA(state, data) {
      // eslint-disable-next-line
      state.data = data;
    },
    SET_LOADING(state, isLoading) {
      // eslint-disable-next-line
      state.isLoading = isLoading;
    },
    SET_USER(state, user) {
      // eslint-disable-next-line
      state.user = user;
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
    GET_USER({ commit }) {
      // console.log(firebase.auth());
      // eslint-disable-next-line
      const currentUser = firebase.auth().currentUser;
      // eslint-disable-next-line
      if(firebase.auth().currentUser){
        console.log(currentUser.email);
        commit('SET_USER', currentUser.email);
      } else {
        console.log('nobody logged in');
      }
    },
  },
});
