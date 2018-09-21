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
export default {
  name: 'MyNavBar',
};
</script>

<style lang="scss" scoped>
  .myNavBar{
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-rows: 60px;
    // background-color: rgb(220,220,220);
    background-color: rgba(220,220,220, .75);
    z-index: 100;
  }
  .my-icon{
    font-size: 40px;
    padding: 4px;
    border: 2px solid #d9534f;
    border-radius: 5px;
  }
</style>
