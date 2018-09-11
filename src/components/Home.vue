<template>
  <div class="home">
    <h1>Schedule</h1>

    <p>You are logged in:</p>
    <p>{{currUser}}</p>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Home',
  data() {
    return {
      currUser: firebase.auth().currentUser.email,
    };
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
  button{
      border: 1px solid black;
      border-radius: 5px;
      margin: 3px;
      padding: 3px;
  }
</style>

