<template>
  <div class="stadiums d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <MyNavBar />

      <div class="stadiums-content d-flex flex-column align-items-center">
        <p class="my-4 h2 text-danger font-weight-bold">Stadiums in this season!</p>
        <ul>
          <li v-for="(item, index) in stadiumsIn" :key="index">
            {{ item }}
          </li>
        </ul>
        <hr>
        <ul>
          <li v-for="(item, index) in stadiumsIn" :key="index">
            {{ item }}
          </li>
        </ul>
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
      stadiumsIn: null,
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
        this.stadiumsIn = this.$store.state.data.stadiums;
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
</style>
