<template>
  <div class="home">
    <h1>Schedule</h1>

    <span>You are logged in:</span>
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
      testData: this.$store.state.data,
    };
  },
  mounted() {
    axios.get('https://gitcdn.xyz/cdn/drraq/PremierLeague.json/fe4e3e1bc5ea4661b3f93720da7e96befdbf9d7b/data.json') // get clubs info
      .then((response) => {
        this.$store.commit('setData', response.data); // set the clubsInfo in the store
        console.log(this.$store.state.data);
      })
    // eslint-disable-next-line
    .catch(error => alert(error)); // handle error
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button{
    border: 1px solid black;
    border-radius: 5px;
    margin: 3px;
    padding: 3px;
  }
</style>

