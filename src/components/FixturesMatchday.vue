<template>

  <div v-if="getMeIsLoading">
    <p>Loading ...</p>
  </div>

  <div v-else>
    <MyNavBar />

    <div class="m-2">
        <p class="my-2 h2">Matchday: {{ id }}</p>

        <div
          v-for="(item, index) in fixturesMatchdayIn" :key="index"
          class="match m-1 p-1">
          <div>
            <p class="p-0 m-0">date!: {{ item.date }}</p>
            <p class="p-0 m-0">{{ item.home_team }} / {{ item.away_team }}</p>
          </div>
          <!-- <router-link
            :to="{ path: this.getLink() }"
            class="m-2">
            <b-button
              size="sm" variant="danger"
              class="d-flex align-items-center justify-content-around px-4">
              <font-awesome-icon icon="clock" class="text-white m-1"/>
              <div>
                <p class="p-0 m-0">date: {{ item.date }}</p>
                <p class="p-0 m-0">{{ item.home_team }} / {{ item.away_team }}</p>
              </div>
            </b-button>
          </router-link> -->
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
      fixturesMatchdayIn: null,
      objectToSend: null,
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
        console.log('fixturesMatchdayIn ---> ');
        console.log(this.fixturesMatchdayIn);
      }
    },
    getLink() {
      return `/fixture/${this.currentMatch}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .match{
    background-color: rgba(217, 83, 79, .5);
    border-radius: 5px;
  }
</style>
