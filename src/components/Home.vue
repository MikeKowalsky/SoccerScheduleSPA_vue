<template>
  <div class="home d-flex flex-column align-items-center">
    <h1>Schedule</h1>

    <span>You are logged in:</span>
    <span>{{currUser}}</span>

    <b-button class="mt-3" size="sm" variant="secondary" @click="logout" >Logout</b-button>

    <b-button class="mt-3" size="lg" variant="secondary">
      <router-link to="/teams">Teams</router-link>
    </b-button>

    <b-button class="mt-3" size="lg" variant="secondary">
      <router-link to="/teams">Stadiums</router-link>
    </b-button>

  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase/app';
import bButton from 'bootstrap-vue/es/components/button/button';
import 'firebase/auth';

export default {
  name: 'Home',
  data() {
    return {
      currUser: firebase.auth().currentUser.email,
      testData: this.$store.state.data,
    };
  },
  components: {
    'b-button': bButton,
  },
  methods: {
    logout() {
      console.log('logout!');
      firebase.auth().signOut()
        .then(() => {
          console.log('logged out');
          this.$router.replace('login');
        })
        // eslint-disable-next-line
        .catch(err => console.log('something went wrong ' + err));
    },
  },
};
</script>

<style lang="scss" scoped>
  a{
    color: white,
  }
</style>

