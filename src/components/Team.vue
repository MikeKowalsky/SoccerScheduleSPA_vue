<template>
  <div class="team d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <MyNavBar />

      <div class="team-content d-flex flex-column align-items-center">
        <p class="my-4 h2 text-dark font-weight-bold"> {{ currentTeamName }}</p>

        <p class="h4 text-dark font-weight-bold">Previous matches</p>
        <div class="container mb-4">
          <router-link :to="{ path: getLink(item) }"
            v-for="(item, index) in dataForFixtureComponent" :key="index">
            <div class="row">
              <div class="col-auto px-2 d-flex align-items-center">
                <p class="m-0">Round {{ item[0] + 1}}</p>
              </div>
              <div
                class="col px-1 d-flex flex-column justify-content-center align-items-center">
                <p class="m-0 text-center"
                  :class="{bold: currentTeamName === fixturesWithCurrentTeam[index].home_team}">
                  {{ fixturesWithCurrentTeam[index].home_team }}</p>
                <p class="m-0 dash">-</p>
                <p class="m-0  text-center"
                  :class="{bold: currentTeamName === fixturesWithCurrentTeam[index].away_team}">
                  {{ fixturesWithCurrentTeam[index].away_team }}</p>
              </div>
              <div
                class="col-auto px-1 d-flex flex-column justify-content-center align-items-center">
                <p class="m-0">{{ fixturesWithCurrentTeam[index].full_time_score }}</p>
                <p class="m-0">({{ fixturesWithCurrentTeam[index].half_time_score }})</p>
              </div>
            </div>
          </router-link>
        </div>

        <p class="h4 text-dark font-weight-bold">Following matches</p>
        <div class="container">
          <router-link :to="{ path: getLink(item) }"
            v-for="(item, index) in dataForFixtureComponentFollowing" :key="index">
            <div class="row">
              <div class="col-auto px-2 d-flex align-items-center">
                <p class="m-0">Round {{ item[0] + 1}}</p>
              </div>
              <div
                class="col-auto px-1 d-flex align-items-center">
                <p class="m-0">{{ fixturesWithCurrentTeam[index].date}}</p>
              </div>
              <div
                class="col px-1 d-flex flex-column justify-content-center align-items-center">
                <p class="m-0 text-center"
                  :class="{bold: currentTeamName
                  === fixturesWithCurrentTeamFollowing[index].home_team}">
                  {{ fixturesWithCurrentTeamFollowing[index].home_team }}</p>
                <p class="m-0 dash">-</p>
                <p class="m-0 text-center"
                  :class="{bold: currentTeamName
                  === fixturesWithCurrentTeamFollowing[index].away_team}">
                  {{ fixturesWithCurrentTeamFollowing[index].away_team }}</p>
              </div>
            </div>
          </router-link>
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
  name: 'Team',
  components: {
    MyNavBar,
    Arrows,
  },
  props: ['id'],
  data() {
    return {
      currentTeamName: null,
      currentTeamCode: null,
      fixtures: null,
      fixturesWithCurrentTeam: [],
      dataForFixtureComponent: [],
      fixturesWithCurrentTeamFollowing: [],
      dataForFixtureComponentFollowing: [],
    //   currentTableData: {},
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
        this.currentTeamName = this.$store.state.data.participating_clubs[this.id];
        this.currentTeamCode = this.$store.state.data.teams_codes[this.id];
        this.fixtures = this.$store.state.data.season_fixtures;
        this.getMoreInfo();
        this.getMoreInfoFollowing();
      }
    },
    getMoreInfo() {
      this.fixtures.forEach((matchday, indexOut) => {
        const match = [];
        if (matchday.number_of_own_goals != null) {
          match.push(indexOut);
          matchday.fixtures.forEach((oneFixture, indexIn) => {
            if (oneFixture.away_team_code === this.currentTeamCode
            || oneFixture.home_team_code === this.currentTeamCode) {
              this.fixturesWithCurrentTeam.push(oneFixture);
              match.push(indexIn);
              this.dataForFixtureComponent.push(match);
            }
          });
        }
      });
      console.log(this.fixturesWithCurrentTeam);
    //   console.log(this.dataForFixtureComponent);
    },
    getLink(itemIn) {
      return `/fixtures-matchday/${itemIn[0]}/fixture/${itemIn[1]}`;
    },
    getMoreInfoFollowing() {
      this.fixtures.forEach((matchday, indexOut) => {
        const match = [];
        if (matchday.number_of_own_goals === null) {
          match.push(indexOut);
          matchday.fixtures.forEach((oneFixture, indexIn) => {
            if (oneFixture.away_team_code === this.currentTeamCode
            || oneFixture.home_team_code === this.currentTeamCode) {
              this.fixturesWithCurrentTeamFollowing.push(oneFixture);
              match.push(indexIn);
              this.dataForFixtureComponentFollowing.push(match);
            }
          });
        }
      });
      console.log(this.fixturesWithCurrentTeamFollowing);
    //   console.log(this.dataForFixtureComponentFollowing);
    },
  },
};
</script>

<style lang="scss" scoped>
  .team{
    color: #3D195B;
    height: 100vh;
  }
  .team-content{
    padding: 60px 0;
    height: auto;
    width: 100vw;
    overflow: scroll;
  }
  .container {
    width: 90vw;
  }
  .row{
    margin: 5px 0;
    padding: 5px;
    border: 1px solid #2E2E2E;
    border-radius: 10px;
    background-color: rgba(211, 211, 211, .7)
  }
  a{
    color: #2E2E2E;
  }
  .dash{
    line-height: 10px;
  }
  .bold{
      font-weight: bold;
  }
//   ul{
//     list-style: none;
//     -webkit-padding-start: 0;
//   }
  img{
    height: 100px;
    width: 100px;
  }
</style>
