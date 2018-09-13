<template>
  <div class="teams">

    <p>{{ isLoadingIn }}</p>

    <div v-if="isLoadingIn">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <p>{{ isLoadingIn }}</p>
      <MyNavBar />

      <ul>
        <li v-for="(item, index) in teamsIn" :key="index">
          {{ item }}
        </li>
      </ul>
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
      isLoadingIn: true,
      // teamsIn: this.$store.state.data.participating_clubs,
    };
  },

  created() {
    if (!this.teamsIn) {
      console.log('%c you have no data yet!!', 'background: #222; color: #bada55');
    }
  },
  computed: {
    getIsLoading: () => {
      console.log(this.$store.getters.getIsLoading);
      this.isLoadingIn = this.$store.getters.getIsLoading;
      return this.$store.getters.getIsLoading;
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
      margin: 10px;
      height: 100vh;

      ul{
        list-style: none;
        padding-left: 0;
      }
  }
</style>
