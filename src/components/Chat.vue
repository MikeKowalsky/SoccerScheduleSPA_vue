<template>
  <div>
    <MyNavBar />

    <div class="chat-content d-flex flex-column align-items-center">
      <p class="my-4 h2 text-danger font-weight-bold">Chat</p>

      <div v-if="isLoading">
        <div v-for="(item, key) in messages" :key="key" class="post">
          <span>{{item.name}}</span>
          <p>{{item.body}}</p>
          <span>{{item.date}}</span>
        </div>
      </div>

      <div class="input">
        <b-form-input v-model="messageInput"
          class="my-1"
          type="text"
          placeholder="Enter your message"></b-form-input>
      </div>

      <button @click="writeNewPost()">Send a post</button>
    </div>

    <Arrows />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import MyNavBar from '@/components/MyNavBar.vue';
import Arrows from '@/components/Arrows.vue';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
// import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Chat',
  components: {
    MyNavBar,
    Arrows,
    'b-form-input': bFormInput,
  },
  data() {
    return {
      messageInput: null,
      user: null,
      messages: null,
      isLoading: true,
    };
  },
  created() {
    this.user = this.$store.state.user;
    this.getPosts();
    this.isLoadingInt = false;
  },
  methods: {
    writeNewPost() {
      const post = {
        name: this.user,
        body: this.messageInput,
        date: new Date(),
      };

      const newPostKey = firebase.database().ref().child('mainChat').push().key;

      const updates = {};
      updates[newPostKey] = post;

      firebase.database().ref('mainChat').update(updates);
      this.getPosts();
    },
    getPosts() {
      firebase.database().ref('mainChat').on('value', (data) => {
        this.messages = data.val();
        console.log(this.messages);
      });
    },
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
  .input{
    width: 80%;
  }
  .post{
    border: 1px solid red;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    p{
      margin: 0px;
    }
    span{
      font-size: .7em;
    }
  }
</style>
