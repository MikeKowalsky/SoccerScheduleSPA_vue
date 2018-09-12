<template>
  <div class="teams">

    <ul>
      <li v-for="(item, index) in teamsIn" :key="index">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Teams',
  data() {
    return {
      teamsIn: this.$store.state.data.participating_clubs,
    };
  },
};
</script>

<style lang="scss" scoped>
  .teams{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      margin: 10px;
      height: 100vh;

      ul{
        list-style: none;
        padding-left: 0;
      }
  }
</style>
