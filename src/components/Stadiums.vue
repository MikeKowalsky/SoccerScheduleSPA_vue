<template>
  <div class="stadiums d-flex flex-column align-items-center">

    <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <MyNavBar />

<!-- '<iframe src="https://SUPERlongLINK" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>', -->
      <div class="stadiums-content d-flex flex-column align-items-center">
        <p class="mt-4 h2 text-danger text-center font-weight-bold">Stadiums list</p>

        <div class="container">
          <div v-for="(item, index) in stadiumsNames" :key="index"
            class="text-center">
            <p class="m-0 mt-4 text-dark font-weight-bold">{{ clubNames[index] }}</p>
            <Map :iframeLink="stadiumsFrames[index]" />
            <!-- <b-btn @click="showCollapse = !showCollapse"
                  :class="showCollapse ? 'collapsed' : null"
                  aria-controls="collapse4"
                  :aria-expanded="showCollapse ? 'true' : 'false'">
              Toggle Collapse
            </b-btn> -->

            <!-- <b-btn @click="showCollapse = !showCollapse"
                  :class="showCollapse ? 'collapsed' : null"
                  aria-controls="collapse4"
                  :aria-expanded="showCollapse ? 'true' : 'false'">
              Toggle Collapse
            </b-btn>
            <b-collapse class="mt-2" v-model="showCollapse" id="collapse4">
              <b-card>
                I should start open!
              </b-card>
            </b-collapse> -->

            <!-- <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn> -->
            <!-- <b-btn v-b-toggle.collapse1 variant="danger" class="my-2">{{ item }}</b-btn> -->


            <!-- <b-collapse id="collapse1" class="mt-2">
              <b-card>
                <iframe
                  :src="stadiumsFrames[index]" width="250" height="250" frameborder="0"
                  style="border:0" allowfullscreen class="card-text"></iframe>
              </b-card>
            </b-collapse> -->

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
import Map from '@/components/Map.vue';

export default {
  name: 'Stadiums',
  components: {
    MyNavBar,
    Arrows,
    Map,
  },
  data() {
    return {
      clubNames: null,
      stadiumsNames: null,
      stadiumsFrames: null,
      showCollapse: true,
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
        this.stadiumsNames = this.$store.state.data.stadiums;
        this.stadiumsFrames = this.$store.state.stadiums;
        // console.log(this.stadiumsFrames);
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
</style>
