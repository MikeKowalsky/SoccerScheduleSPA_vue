<template>
  <div id="app">
    <HeroImage/>

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
  created() {
    this.$store.dispatch('FETCH_DATA', { self: this });
    this.$store.dispatch('GET_USER');
    this.$store.dispatch('SET_SET_STADIUMS');
  },
  methods: {
    printData() {
      // do something with data
      console.log('Data--->', this.$store.state.data);
    },
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
