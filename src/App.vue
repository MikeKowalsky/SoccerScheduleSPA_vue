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
import HeroImage from './components/HeroImage.vue';

export default {
  name: 'App',
  components: {
    HeroImage,
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
