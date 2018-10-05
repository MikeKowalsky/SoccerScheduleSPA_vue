<template>
  <div class="players d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="players-content d-flex flex-column justify-content-center align-items-center">
        <p class="mt-4 h2 text-dark font-weight-bold">Players</p>
        <table>
          <tr>
            <th>No.</th>
            <th>Full name</th>
            <th>Nationality</th>
            <th>Position</th>
            <th>Appearances</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Previous club</th>
          </tr>
          <tr v-for="(player, index) in currentTeamPlayers" :key="index"
            class="tableRow">
            <td class="centerText">{{ player.jersey_number }}</td>
            <td>{{ player.first_name }} {{ player.middle_name }} {{ player.last_name }}</td>
            <td class="centerText">{{ player.nationality }}</td>
            <td class="centerText">{{ player.position }}</td>
            <td class="centerText">{{ player.appearances }}</td>
            <td class="centerText">{{ player.goals_scored }}</td>
            <td class="centerText">{{ player.assists_made }}</td>
            <td class="centerText">{{ player.previous_club }}</td>
          </tr>
        </table>
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
    // width: 500px;
    overflow: scroll;
  }
  .player{
    // width: 90vw;
    padding: 5px;
    margin: 5px;
    background-color: rgba(211, 211, 211, .5)
  }
  table{
    font-size: .5em;
    th{
      text-align: center;
    }
  }
  .centerText{
    text-align: center;
  }
  .tableRow{
    border-bottom: 1px dashed black;
  }
</style>
