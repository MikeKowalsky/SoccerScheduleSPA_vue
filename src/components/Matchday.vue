<template>
  <div class="matchday">
    <router-link
      :to="{ path: this.getLink() }"
      class="m-2">
      <b-button
        size="sm" variant="danger"
        :class="{matchdayLink: currentFixturesMatchday.number_of_own_goals != null}"
        class="d-flex align-items-center justify-content-around px-4">
        <font-awesome-icon icon="clock" class="text-white m-1"/>
        <div class="ml-2">
          <p class="mx-2 my-0">Matchday no {{ currentFixturesMatchday.matchday }}</p>
          <p class="mx-2 my-0">Starts on {{ currentFixturesMatchday.fixtures[0].date }}</p>
        </div>
      </b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Matchday',
  props: ['currentFixturesMatchday'],
  created() {
    console.log(this.currentFixturesMatchday);
  },
  methods: {
    getLink() {
      return `/fixtures-matchday/${this.currentFixturesMatchday.matchday}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .matchday{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }
  .matchdayLink{
    opacity: .7;
  }
</style>
