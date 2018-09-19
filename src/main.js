import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faCompass, faClock, faComments, faHome, faPowerOff, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);

library.add(faUsers, faCompass, faClock, faComments, faHome, faPowerOff, faInfoCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBBtUNlsNO6m6HEoF5vQ3Ntqxt5VZHA5Gw',
  authDomain: 'mike-schedule.firebaseapp.com',
  databaseURL: 'https://mike-schedule.firebaseio.com',
  projectId: 'mike-schedule',
  storageBucket: 'mike-schedule.appspot.com',
  messagingSenderId: '135457804803',
};

firebase.initializeApp(config);

/*
// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/sign-in');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});


// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends

Firebase.auth().onAuthStateChanged(function (user) {
  // new Vue({
  //   el: '#app',
  //   store: store,
  //   router: router,
  //   render: h => h(App)
  // });
});

*/

/* eslint-disable */
firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
});
