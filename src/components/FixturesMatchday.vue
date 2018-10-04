<template>

  <div v-if="getMeIsLoading">
    <p>Loading ...</p>
  </div>

  <div v-else>
    <MyNavBar />

    <div class="fixtures-matchday-content m-2">
        <p class="my-4 h2 text-danger font-weight-bold text-center">Matchday no {{ matchdayNo }}</p>

        <div
          v-for="(item, index) in fixturesMatchdayIn" :key="index"
          class="d-flex flex-column align-items-center">
          <router-link
            :to="{ path: getLink(index) }"
            class="m-2">
            <b-button
              size="lg" variant="danger"
              class="singleMatch d-flex align-items-center justify-content-around px-4"
              :class="{played: item.full_time_score != null}">
              <font-awesome-icon icon="info-circle" class="text-white m-1 h2"/>
              <div class="ml-3">
                <p class="p-0 m-0 h5">{{ item.home_team }}</p>
                <p class="p-0 m-0 h5 dash"> - </p>
                <p class="p-0 m-0 h5">{{ item.away_team }}</p>
                <p class="p-0 m-0 h6 date">Date: {{ item.date }}</p>
                <p class="p-0 m-0 h6"
                  v-if="item.full_time_score != null">
                  Result: {{ item.full_time_score }} ( {{ item.half_time_score }} )</p>
              </div>
            </b-button>
          </router-link>
        </div>

    </div>

    <Arrows />
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import Arrows from '@/components/Arrows.vue';

export default {
  name: 'FixturesMatchday',
  props: ['id'],
  components: {
    MyNavBar,
    Arrows,
  },
  data() {
    return {
      fixturesMatchdayIn: null,
      matchdayNo: parseInt(this.id, 10) + 1,
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
        this.fixturesMatchdayIn = this.$store.state.data.season_fixtures[this.id].fixtures;
        // console.log('fixturesMatchdayIn ---> ');
        console.log(this.fixturesMatchdayIn);
      }
    },
    getLink(indexIn) {
      return `/fixtures-matchday/${this.id}/fixture/${indexIn}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .singleMatch{
    width: 85vw;
  }
  .played{
    opacity: .8;
  }
  .fixtures-matchday-content{
    padding: 60px 0;
    height: auto;
    overflow: scroll;
  }
  .dash{
    line-height: 0.5em;
  }
  .date{
    margin-top: 10px !important;
  }
</style>
