<template>
  <div class="players d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="players-content d-flex flex-column align-items-center">
        <p class="mt-4 h2 text-dark font-weight-bold">Players</p>
        <div>
          <div v-for="(player, index) in currentTeamPlayers" :key="index"
            class="player d-flex">
            <span>{{ player.jersey_number }} |</span>
            <div class="d-flex">
              <p>| {{ player.first_name }} {{ player.middle_name }} {{ player.last_name }} |</p>
              <p>| {{ player.position }}</p>
            </div>
          </div>
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
  name: 'Players',
  components: {
    MyNavBar,
    Arrows,
  },
  props: ['id'],
  data() {
    return {
      currentTeamCode: this.id,
      allPlayers: null,
      currentTeamPlayers: null,
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
        this.allPlayers = this.$store.state.data.players;
        this.getCurrnetTeamPlayers();
      }
    },
    getCurrnetTeamPlayers() {
      this.currentTeamPlayers =
      this.allPlayers.filter(onePlayer => onePlayer.club_code === this.currentTeamCode);
      console.log(this.currentTeamPlayers);
    },
  },
};
</script>

<style lang="scss" scoped>
  .players{
    color: #3D195B;
    height: 100vh;
  }
  .players-content{
    padding: 60px 0;
    height: auto;
    width: 100vw;
    overflow: scroll;
  }
  .player{
    width: 90vw;
    padding: 5px;
    margin: 5px;
    background-color: rgba(211, 211, 211, .5)
  }
</style>
