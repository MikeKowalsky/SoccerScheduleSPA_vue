<template>
  <div>
    <MyNavBar />

    <div class="chat-content d-flex flex-column align-items-center">
      <p class="my-4 h2 text-danger font-weight-bold">Chat</p>

      <div v-if="isLoading" class="posts-container d-flex flex-column align-items-start">
        <div
          v-for="(item, key) in messages" :key="key"
          class="post" :class="{myPosts: item.name == user}">
          <span>{{item.name}}</span>
          <p class="">{{item.body}}</p>
          <span>{{item.date}}</span>
        </div>
      </div>

      <div class="input">
        <b-form-input v-model="messageInput"
          class="my-1"
          type="text"
          placeholder="Enter your message"></b-form-input>
      </div>

      <b-button
        class="my-2" size="lg" variant="danger" @click="writeNewPost">
        Send
      </b-button>
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
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Chat',
  components: {
    MyNavBar,
    Arrows,
    'b-form-input': bFormInput,
    'b-button': bButton,
  },
  data() {
    return {
      messageInput: null,
      user: null,
      messages: null,
      isLoading: true,
    };
  },
  mounted() {
    this.user = this.$store.state.user;
    this.getPosts();
    this.isLoadingInt = false;
  },
  methods: {
    writeNewPost() {
      const post = {
        name: this.user,
        body: this.messageInput,
        date: new Date().toLocaleString('en-US'),
      };

      const newPostKey = firebase.database().ref().child('mainChat').push().key;

      const updates = {};
      updates[newPostKey] = post;

      firebase.database().ref('mainChat').update(updates);
      this.messageInput = null;
      this.getPosts();
    },
    getPosts() {
      firebase.database().ref('mainChat').on('value', (data) => {
        this.messages = data.val();
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
    overflow-y: scroll;
  }
  .posts-container{
    width: 90vw;
  }
  .input{
    width: 80%;
  }
  .post{
    border: 1px solid red;
    border-radius: 10px;
    background-color: rgba(211, 211, 211, .7);
    padding: 0 10px;
    margin-top: 10px;
    text-align: left;
    p{
      margin: 0px;
      font-size: 1.1em;
    }
    span{
      font-size: .7em;
    }
  }
  .myPosts{
    text-align: right;
    align-self: flex-end;
  }
</style>
