<template>
  <div class="fixtures d-flex flex-column">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="fixtures-content d-flex flex-column align-items-center justify-content-around">
        <p class="my-4 h2 text-danger font-weight-bold">Fixtures!</p>
        <div v-for="(item, index) in fixturesIn" :key="index">
          <Matchday :currentFixturesMatchday="item" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import Matchday from '@/components/Matchday.vue';

export default {
  name: 'Fixtures',
  components: {
    MyNavBar,
    Matchday,
  },
  data() {
    return {
      fixturesIn: null,
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
        this.fixturesIn = this.$store.state.data.season_fixtures;
        console.log(this.fixturesIn);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .fixtures{
    color: black;
    height: 100vh;
  }
  // .fixtures-content{
  //   height: calc(100vh - 70px);
  // }
</style>
