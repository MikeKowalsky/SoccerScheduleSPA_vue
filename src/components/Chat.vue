<template>
  <div>
    <MyNavBar />

    <div class="chat-content d-flex flex-column align-items-center">
      <p class="my-4 h2 text-danger font-weight-bold">Chat</p>
      <p>Wait for it</p>
    </div>

    <Arrows />
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import Arrows from '@/components/Arrows.vue';

export default {
  name: 'Chat',
  components: {
    MyNavBar,
    Arrows,
  },
};
</script>

<style lang="scss" scoped>
  .chat-content{
    padding: 60px 0;
    height: auto;
    width: 100vw;
    overflow: scroll;
  }
</style>
