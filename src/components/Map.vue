<template>
  <div class="map d-flex flex-column align-items-center">

    <!-- <div v-if="getMeIsLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
    </div> -->

    <!-- <p>in Map {{iframeLink}}</p> -->
    <!-- <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
    <b-collapse id="collapse1" class="mt-2">
        <b-card>
            <iframe
                :src="iframeLink" width="250" height="250" frameborder="0"
                style="border:0" allowfullscreen  class="card-text"></iframe>
        </b-card>
    </b-collapse> -->

    <iframe
        :src="iframeLink" width="250" height="250" frameborder="0"
        style="border:0" allowfullscreen  class="card-text map-item"></iframe>

  </div>
</template>

<script>


export default {
  name: 'Map',
  //   data() {
  //     return {
  //       currentMatch: null,
  //     };
  //   },
  props: ['iframeLink'],
//   created() {
//     console.log(`${this.item}`);
//   },
//   computed: {
//     getMeIsLoading() {
//       this.getDataFromStore();
//       return this.$store.getters.isLoading;
//     },
//   },
//   methods: {
//     getDataFromStore() {
//       if (!this.$store.getters.isLoading) {
//         this.currentMatch =
//           this.$store.state.data.season_fixtures[this.id].fixtures[this.indexData];
//       }
//     },
//   },
};
</script>

<style lang="scss" scoped>
    .map{
        margin-bottom: 10px;
    }
    .map-item{
        border: 1px solid grey !important;
        border-radius: 10px;
        padding: 5px;
        background-color: rgba(211, 211, 211, .7);
    }
</style>
