<template>
  <div class="fixture d-flex flex-column">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="info d-flex flex-column align-items-center justify-content-center">
        <p class="my-4 h2 text-danger font-weight-bold">Some more info</p>
        <p class="h5 font-weight-bold">Date: </p>
        <span class="h3 text-danger">{{ currentMatch.date }}</span>
        <p class="h5 font-weight-bold">Home team: </p>
        <span class="h3 text-danger">{{ currentMatch.home_team }}</span>
        <p class="h5 font-weight-bold">Away team: </p>
        <span class="h3 text-danger">{{ currentMatch.away_team }}</span>
        <p class="h5 font-weight-bold">Result: </p>
        <span class="h3 text-danger">{{ currentMatch.full_time_score }}</span>
        <p class="h5 font-weight-bold">Stadium: </p>
        <span class="h3 text-danger">{{ currentMatch.venue }}</span>
        <p class="h5 font-weight-bold">Audience: </p>
        <span class="h3 text-danger">{{ currentMatch.attendance }}</span>
      </div>

      <Arrows />
    </div>
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import Arrows from '@/components/Arrows.vue';

export default {
  name: 'Fixture',
  data() {
    return {
      currentMatch: null,
    };
  },
  components: {
    MyNavBar,
    Arrows,
  },
  props: ['id', 'indexData'],
  created() {
    // console.log(`${this.id} / ${this.indexData}`);
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
        this.currentMatch =
          this.$store.state.data.season_fixtures[this.id].fixtures[this.indexData];
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
  .info{
    padding: 60px 0;
    height: auto;
    overflow: scroll;
  }
</style>
