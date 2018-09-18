<template>

  <div v-if="getMeIsLoading">
    <p>Loading ...</p>
  </div>

  <div v-else>
    <MyNavBar />

    <div class="m-2">
        <p class="my-2 h2">Matchday: {{ id }}</p>

        <div
          v-for="(item, index) in fixtureIn" :key="index"
          class="match m-1 p-1">
            <p class="p-0 m-0">date: {{ item.date }}</p>
            <p class="p-0 m-0">{{ item.home_team }} / {{ item.away_team }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'FixturesMatchday',
  props: ['id'],
  components: {
    MyNavBar,
  },
  data() {
    return {
      fixtureIn: null,
    };
  },
  // beforeCreate() {
  //   const currentDate = new Date();
  //   console.log(currentDate);

  // },
  computed: {
    getMeIsLoading() {
      this.getDataFromStore();
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    getDataFromStore() {
      if (!this.$store.getters.isLoading) {
        this.fixtureIn = this.$store.state.data.season_fixtures[this.id].fixtures;
        console.log(this.fixtureIn);
      }
    },
    // checkDate() {
    //   const currentDate = new Date();
    //   console.log(currentDate);
    // },
  },
};
</script>

<style lang="scss" scoped>
  .match{
    background-color: rgba(217, 83, 79, .4);
    border-radius: 5px;
  }
</style>
