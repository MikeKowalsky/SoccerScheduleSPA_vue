<template>
  <div class="fixture d-flex flex-column">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="info d-flex flex-column align-items-center justify-content-center">
        <p class="my-4 h2 text-danger font-weight-bold">Some more info</p>
        <p class="font-weight-bold">Date: {{ currentMatch.date }}</p>
        <p class="font-weight-bold">Stadium: {{ currentMatch.venue }}</p>
        <p class="font-weight-bold"
          v-if="currentMatch.attendance != null">Audience: {{ currentMatch.attendance }}</p>
        <p class="h5 font-weight-bold">Home team: </p>
        <span class="h3 text-danger">{{ currentMatch.home_team }}</span>
        <p class="h5 font-weight-bold">Away team: </p>
        <span class="h3 text-danger">{{ currentMatch.away_team }}</span>
        <div v-if="currentMatch.attendance != null" class="resultsDiv">
          <p class="h5 font-weight-bold">Result: </p>
          <span class="h4 text-danger">
            {{ currentMatch.full_time_score }} ({{ currentMatch.half_time_score }})
            </span>
          <div class="row my-row">
            <div class="col-6">
              <p v-if="currentMatch.home_team_goals == 0"> - - - </p>
              <p v-else v-for="(goal, index) in currentMatch.home_team_scorers" :key="index">
                {{ goal }}
              </p>
            </div>
            <div class="col-6 right-side">
              <p v-if="currentMatch.away_team_goals == 0"> - - - </p>
              <p v-else v-for="(goal, index) in currentMatch.away_team_scorers" :key="index">
                {{ goal }}
              </p>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="h5 font-weight-bold">Time: {{ currentMatch.local_time.slice(0,5) }}</p>
        </div>

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
  .resultsDiv{
    width: 80vw;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
  .my-row{
    width: 80vw;
  }
  .my-row > div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .my-row p{
    margin: 0;
    padding: 0;
  }
  .right-side{
    border-left: 2px dashed black;
  }
</style>
