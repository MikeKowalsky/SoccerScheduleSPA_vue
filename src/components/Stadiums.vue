<template>
  <div class="stadiums">

    <ul>
      <li v-for="(item, index) in stadiumsIn" :key="index">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Stadiums',
  data() {
    return {
      stadiumsIn: this.$store.state.data.stadiums,
    };
  },
};
</script>

<style lang="scss" scoped>
  .stadiums{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
      margin: 10px;
      height: 100vh;

      ul{
        list-style: none;
        padding-left: 0;
      }
  }
</style>
