<template>
  <div class="home d-flex flex-column align-items-center justify-content-center">

    <div class="home-basic d-flex flex-column align-items-center p-2">
      <b-button class="m-0 d-flex justify-content-around align-items-center align-self-end"
        size="sm" variant="danger" @click="logout">
        <font-awesome-icon icon="power-off" class="text-white m-1"/>
      </b-button>
      <h1 class="text-danger font-weight-bold display-4">Schedule</h1>
      <span class="text-body">Hello {{currUser}} !</span>
      <!-- <b-button class="mt-3" size="sm" variant="danger" @click="logout" >Logout</b-button> -->
    </div>

    <div class="home-links d-flex flex-column justify-content-around align-items-between">

      <router-link to="/fixtures">
        <b-button
          size="lg" variant="danger" class="d-flex align-items-center justify-content-around">
          <font-awesome-icon icon="clock" class="display-4 text-white m-1"/>
          <p class="mx-2 my-0">Fixtures</p>
        </b-button>
      </router-link>

      <router-link to="/teams">
        <b-button
          size="lg" variant="danger" class="d-flex align-items-center justify-content-around">
          <font-awesome-icon icon="compass" class="display-4 text-white m-1"/>
          <p class="mx-2 my-0">Teams</p>
        </b-button>
      </router-link>

      <router-link to="/stadiums">
        <b-button
          size="lg" variant="danger" class="d-flex align-items-center justify-content-around">
          <font-awesome-icon icon="compass" class="display-4 text-white m-1"/>
          <p class="mx-2 my-0">Stadiums</p>
        </b-button>
      </router-link>

      <router-link to="/stadiums">
        <b-button
          size="lg" variant="danger" class="d-flex align-items-center justify-content-around">
          <font-awesome-icon icon="comments" class="display-4 text-white m-1"/>
          <p class="mx-2 my-0">Chat</p>
        </b-button>
      </router-link>

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
    height: 175px;
    width: 100vw;
  }
  .home-links{
    width: 100vw;
    height: calc(100% - 175px);
    padding: 10px;
  }
  h1, span {
    letter-spacing: 3px;
  }
  a button{
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    font-weight: bold;
    width: calc(100vw - 20px);
  }
</style>

