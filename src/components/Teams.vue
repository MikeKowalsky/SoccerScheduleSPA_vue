<template>
  <div class="teams d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="teams-content d-flex flex-column align-items-center">
        <p class="mt-4 h2 text-danger font-weight-bold">Teams list</p>
        <div>
          <div v-for="(item, index) in teams" :key="index"
            class="text-center my-4">
            <router-link
              :to="{ path: `/team/${index}` }">
              <p class="text-dark text-center font-weight-bold h4 mt-4">{{ item }}</p>
              <img :src="require(`../assets/team-logos/${teamCodes[index]}.svg`)" />
              <!-- <img :src="require('../assets/team-logos/' + teamCodes[index] + '.svg')" /> -->
            </router-link>
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
      }
    },
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
  img{
    height: 200px;
    width: 200px;
  }
</style>
