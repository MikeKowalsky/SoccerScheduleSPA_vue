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
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Home',
  data() {
    return {
      currUser: firebase.auth().currentUser.email,
      testClubs: this.$store.state.clubsInfo,
      testGames: this.$store.state.gamesInfo,
    };
  },
  mounted() {
    axios.get('https://api.myjson.com/bins/16vy4g') // get clubs info
      .then((response) => {
        this.$store.commit('setClubs', response.data.clubs); // set the clubsInfo in the store
      })
    // eslint-disable-next-line
    .catch(error => alert(error)); // handle error

    axios.get('https://api.myjson.com/bins/nu2rk') // get games info
      .then((response) => {
        this.$store.commit('setGames', response.data.rounds); // set the clubsInfo in the store
      })
    // eslint-disable-next-line
    .catch(error => alert(error)); // handle error

    console.log(this.$store.state.clubsInfo);
    console.log(this.$store.state.gamesInfo);
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
    color: white;
  }
  button{
    border: 1px solid black;
    border-radius: 5px;
    margin: 3px;
    padding: 3px;
  }
</style>

