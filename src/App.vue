<template>
  <div id="app">
    <HeroImage/>

    <router-view />
  </div>
</template>

<script>
// import axios from 'axios';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import HeroImage from './components/HeroImage.vue';

export default {
  name: 'App',
  components: {
    HeroImage,
  },
  created() {
    this.$store.dispatch('FETCH_DATA', { self: this });
    this.$store.dispatch('GET_USER');

    // const currentUser = firebase.auth().currentUser;
    // firebase.auth().currentUser ? console.log(currentUser.email)
    // : console.log('nobody logged in');
  },
  methods: {
    printData() {
      // do something with data
      console.log('Data--->', this.$store.state.data);
    },
  },
  mounted() {
    // axios.get('https://gitcdn.xyz/cdn/drraq/PremierLeague.json/fe4e3e1bc5ea4661b3f93720da7e96befdbf9d7b/data.json') // get clubs info
    //   .then((response) => {
    //     this.$store.commit('setData', response.data); // set the data in the store
    //     this.$store.commit('setLoading', false); // set the data in the store
    //     console.log(this.$store.state.data);
    //     console.log(this.$store.state.isLoading);
    //   })
    // // eslint-disable-next-line
    // .catch(error => alert(error)); // handle error
  },
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,900');

  body{
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
  }
  #app{
    height: 100vh;
    width: 100vw;
  }
</style>
