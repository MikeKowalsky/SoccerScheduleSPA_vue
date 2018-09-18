<template>
  <div class="myNavBar">
    <router-link to="/home" class="d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="home" class="my-icon text-danger"/>
    </router-link>
    <router-link to="/fixtures" class="d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="clock" class="my-icon text-danger"/>
    </router-link>
    <router-link to="/teams" class="d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="users" class="my-icon text-danger"/>
    </router-link>
    <router-link to="/stadiums" class="d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="compass" class="my-icon text-danger"/>
    </router-link>
    <router-link to="/chat" class="d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="comments" class="my-icon text-danger"/>
    </router-link>
  </div>
</template>

<script>
import bButton from 'bootstrap-vue/es/components/button/button';
import bButtonToolbar from 'bootstrap-vue/es/components/button-toolbar/button-toolbar';

export default {
  name: 'MyNavBar',
  data() {
    return {
    };
  },
  components: {
    'b-button': bButton,
    'b-button-toolbar': bButtonToolbar,
  },
};
</script>

<style lang="scss" scoped>
  .myNavBar{
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-rows: 60px;
    background-color: rgba(220,220,220, .75);

    a{
      color: white;
    }
  }
  .my-icon{
    font-size: 40px;
    padding: 4px;
    border: 2px solid #d9534f;
    border-radius: 5px;
  }
</style>
