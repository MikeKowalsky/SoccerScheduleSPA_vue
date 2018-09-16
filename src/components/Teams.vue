<template>
  <div class="teams">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <MyNavBar />

      <ul>
        <li v-for="(item, index) in teamsIn" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'Teams',
  components: {
    MyNavBar,
  },
  data() {
    return {
      isLoadingIn: true,
      teamsIn: null,
    };
  },
  computed: {
    getMeIsLoading() {
      console.log(this.$store.getters.isLoading);

      if (!this.$store.getters.isLoading) {
        this.teamsIn = this.$store.state.data.participating_clubs;
      }
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
  .teams{
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
