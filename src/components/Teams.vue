<template>
  <div class="teams d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="teams-content d-flex flex-column align-items-center">
        <p class="my-4 h2 text-danger font-weight-bold">Teams in this season!</p>
        <ul>
          <li v-for="(item, index) in teamsIn" :key="index">
            {{ item }}
          </li>
        </ul>
        <hr>
        <ul>
          <li v-for="(item, index) in teamsIn" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <Arrows />
    </div>

  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import Arrows from '@/components/Arrows.vue';

export default {
  name: 'Teams',
  components: {
    MyNavBar,
    Arrows,
  },
  data() {
    return {
      teamsIn: null,
    };
  },
  computed: {
    getMeIsLoading() {
      this.getDataFromStore();
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    getDataFromStore() {
      if (!this.$store.getters.isLoading) {
        this.teamsIn = this.$store.state.data.participating_clubs;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .teams{
    color: black;
    height: 100vh;
  }
  .teams-content{
    padding: 60px 0;
    height: auto;
    width: 100vw;
    overflow: scroll;
    ul{
      list-style: none;
    }
  }
</style>
