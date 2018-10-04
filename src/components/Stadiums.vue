<template>
  <div class="stadiums d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <MyNavBar />

      <div class="stadiums-content d-flex flex-column align-items-center">
        <p class="mt-4 h2 text-danger text-center font-weight-bold">Stadiums list</p>

        <div class="container">
          <div v-for="(item, index) in stadiumsNames" :key="index"
            class="text-center">
            <p class="m-0 mt-4 text-dark font-weight-bold"
              @click="setShowMap(clubCodes[index])">
              {{ clubNames[index] }} - {{item}}</p>

            <iframe
              :src="stadiumsFrames[index]" width="250" height="250" frameborder="0"
              style="border:0" allowfullscreen class="map-item hideMap"
              :class="{showMap: showMap == clubCodes[index]}"></iframe>
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
  name: 'Stadiums',
  components: {
    MyNavBar,
    Arrows,
  },
  data() {
    return {
      clubNames: null,
      clubCodes: null,
      stadiumsNames: null,
      stadiumsFrames: null,
      showMap: false,
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
        this.clubNames = this.$store.state.data.participating_clubs;
        this.clubCodes = this.$store.state.data.teams_codes;
        this.stadiumsNames = this.$store.state.data.stadiums;
        this.stadiumsFrames = this.$store.state.stadiums;
      }
    },
    setShowMap(teamCode) {
      console.log(teamCode);
      if (this.showMap === teamCode) {
        this.showMap = false;
      } else {
        this.showMap = teamCode;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .stadiums{
    color: black;
    height: 100vh;
  }
  .stadiums-content{
    padding: 60px 0;
    height: auto;
    width: 100vw;
    overflow: scroll;
    ul{
      list-style: none;
    }
  }
  .container{
    width: 90vw;
  }
  .hideMap{
    display: none;
  }
  .showMap{
    display: inline;
  }
</style>
