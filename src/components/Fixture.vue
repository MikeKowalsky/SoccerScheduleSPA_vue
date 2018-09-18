<template>
  <div class="fixture d-flex flex-column">

    <!-- <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div> -->

    <!-- <div v-else> -->
      <MyNavBar />

      <p>Info about this one match</p>
      <p>{{ currentMatch.home_team }}</p>
      <p>{{ currentMatch.away_team }}</p>
      <p>{{ currentMatch.full_time_score }}</p>
      <p>{{ currentMatch.venue }}</p>
      <p>{{ currentMatch.attendance }}</p>

    <!-- </div> -->

  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'Fixture',
  components: {
    MyNavBar,
  },
  props: ['currentMatch'],
  created() {
    console.log(this.currentMatch);
  },
};
</script>

<style lang="scss" scoped>
  .fixtures{
    color: black;
    height: 100vh;
  }
</style>
