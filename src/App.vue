<template>
  <div id="app">
    <HeroImage/>

    <!-- <div class="nav">
      <router-link to="/">schedule</router-link><br>
      <router-link to="/about">about</router-link><br>
      <router-link to="/login">login</router-link><br>
      <router-link to="/signup">signUp</router-link><br>
    </div> -->

    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import HeroImage from './components/HeroImage.vue';

export default {
  name: 'App',
  components: {
    HeroImage,
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
};

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,900');

  body{
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    padding: 0px;
    height: 100vh;
  }
  #app{
    height: 100vh;
  }
</style>
