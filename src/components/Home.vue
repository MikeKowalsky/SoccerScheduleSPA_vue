<template>
  <div class="d-flex flex-column align-items-center justify-content-center home">

    <div class="home-basic d-flex flex-column align-items-center p-2">
      <h1 class="mt-3 text-danger font-weight-bold display-4">Schedule</h1>
      <span class="text-body">Hello {{currUser}} !</span>
      <b-button class="mt-3" size="sm" variant="danger" @click="logout" >Logout</b-button>
    </div>

    <div class="home-links d-flex flex-column justify-content-around align-items-between">
      <!-- <div class="d-flex align-items-center justify-content-between"> -->
        <b-button
          size="lg" variant="danger" class="d-flex justify-content-around align-items-center">
          <font-awesome-icon icon="clock" class="display-4 text-white m-1"/>
          <router-link to="/teams">Fixtures</router-link>
        </b-button>
      <!-- </div> -->

      <!-- <div class="d-flex align-items-center justify-content-between"> -->
        <b-button
          size="lg" variant="danger" class="d-flex justify-content-around align-items-center">
          <font-awesome-icon icon="users" class="display-4 text-white m-1"/>
          <router-link to="/teams">Teams</router-link>
        </b-button>
      <!-- </div> -->

      <!-- <div class="d-flex align-items-center justify-content-between"> -->
        <b-button
          size="lg" variant="danger" class="d-flex justify-content-around align-items-center">
          <font-awesome-icon icon="compass" class="display-4 text-white m-1"/>
          <router-link to="/stadiums">Stadiums</router-link>
        </b-button>
      <!-- </div> -->

      <!-- <div class="d-flex align-items-center justify-content-between"> -->
        <b-button
          size="lg" variant="danger" class="d-flex justify-content-around align-items-center">
          <font-awesome-icon icon="comments" class="display-4 text-white m-1"/>
          <router-link to="/stadiums">Chat</router-link>
        </b-button>
      <!-- </div> -->
    </div>

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
  .home{
    height: 100vh;
  }
  .home-basic{
    height: 200px;
  }
  .home-links{
    width: 100vw;
    height: calc(100% - 200px);
    padding: 10px;
  }
  h1, span {
    letter-spacing: 3px;
  }
  a {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    font-weight: bold;
  }
</style>

