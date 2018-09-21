<template>
  <div class="arrows">

    <b-Button @click="$router.go(-1)"
      class="arrow-item d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="angle-double-left" class="my-icon text-danger"/>
    </b-Button>

    <b-Button @click="$router.go(1)"
      class="arrow-item d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="angle-double-right" class="my-icon text-danger"/>
    </b-Button>

  </div>
</template>

<script>
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Arrows',
  components: {
    'b-button': bButton,
  },
};
</script>

<style lang="scss" scoped>
  .arrows{
    width: 100vw;
    height: 60px;
    position: fixed;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-rows: 60px;
  }
  .arrow-item{
    // background-color: rgb(220,220,220);
    background-color: rgba(220,220,220, .75);
    border: none;
    border-radius: 0;
  }
  .my-icon{
    font-size: 40px;
    padding: 4px;
    border: 2px solid #d9534f;
    border-radius: 5px;
  }
</style>
