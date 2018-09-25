<template>
  <div class="teams d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="teams-content d-flex flex-column align-items-center">
        <p class="my-4 h2 text-danger font-weight-bold">Teams in this season!</p>
        <div>
          <div v-for="(item, index) in teams" :key="index">
            <p>{{ item }} {{ teamCodes[index] }} </p>
            <!-- <img src="../assets/team-logos/ARS.svg"> -->
            <!-- <img :src="getLink(index)"> -->
            <!-- <img :src="'../assets/team-logos/' + teamCodes[index] + '.svg'"> -->
            <img :src="teamImgLinks[index]" />
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
  name: 'Teams',
  components: {
    MyNavBar,
    Arrows,
  },
  data() {
    return {
      teams: null,
      teamCodes: null,
      teamImgLinks: [],
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
        this.teams = this.$store.state.data.participating_clubs;
        this.teamCodes = this.$store.state.data.teams_codes;
        console.log(this.teams);
        console.log(this.teamCodes);
        this.createTeamImgLinks();
        console.log(this.teamImgLinks);
      }
    },
    createTeamImgLinks() {
      this.teamCodes.forEach((code, index) => {
        // console.log(`../assets/team-logos/${code}.svg`);
        this.teamImgLinks.push(`../assets/team-logos/${code}.svg`);
      });
    },
    // getLink(teamCodeIndex) {
    //   console.log(`../assets/team-logos/${this.teamCodes[teamCodeIndex]}.svg`);
    //   return `../assets/team-logos/${this.teamCodes[teamCodeIndex]}.svg`;
    // },
  },
};
</script>

<style lang="scss" scoped>
  .teams{
    color: #3D195B;
    height: 100vh;
  }
  .teams-content{
    padding: 60px 0;
    height: auto;
    width: 100vw;
    overflow: scroll;
  }
</style>
