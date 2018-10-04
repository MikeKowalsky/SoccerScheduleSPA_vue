<template>
  <div class="matchday">
    <router-link
      :to="{ path: this.getLink() }"
      class="m-3">
      <b-button
        size="sm" variant="danger"
        :class="{matchdayLink: currentFixturesMatchday.number_of_own_goals != null}"
        class="d-flex align-items-center justify-content-around px-4">
        <font-awesome-icon icon="clock" class="text-white m-1 h3"/>
        <div class="ml-2">
          <p class="mx-2 my-0 h4">Matchday no {{ currentFixturesMatchday.matchday }}</p>
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
      return `/fixtures-matchday/${this.currentFixturesMatchday.matchday - 1}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .matchday{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    color: black;
  }
  .matchdayLink{
    z-index: -100;
    opacity: .7;
  }
</style>
