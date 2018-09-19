<template>
  <div class="teams">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <MyNavBar />

      <div class="teams-content">
        <h4>Teams in this season!</h4>
        <ol>
          <li v-for="(item, index) in teamsIn" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'Teams',
  components: {
    MyNavBar,
  },
  data() {
    return {
      teamsIn: null,
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
        this.teamsIn = this.$store.state.data.participating_clubs;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .teams{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 100vh;
  }
  .teams-content{
    margin: 10px;
    ol{
      padding-left: 20px;
    }
  }
</style>
