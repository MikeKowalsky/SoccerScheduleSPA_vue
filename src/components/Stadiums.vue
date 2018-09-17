<template>
  <div class="stadiums">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <MyNavBar />

      <div class="stadiums-content">
        <h4>List of stadiums in this season!</h4>
        <ol>
          <li v-for="(item, index) in stadiumsIn" :key="index">
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
  name: 'Stadiums',
  components: {
    MyNavBar,
  },
  data() {
    return {
      isLoadingIn: true,
      stadiumsIn: null,
    };
  },
  computed: {
    getMeIsLoading() {
      if (!this.$store.getters.isLoading) {
        this.stadiumsIn = this.$store.state.data.stadiums;
      }
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
  .stadiums{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 100vh;
  }
  .stadiums-content{
    margin: 10px;
    ol{
      padding-left: 20px;
    }
  }
</style>
