<template>
  <div>
    <MyNavBar />

    <div class="chat-content d-flex flex-column align-items-center">
      <p class="my-4 h2 text-danger font-weight-bold">Chat</p>

      <div v-if="!isLoading"
        class="posts-container d-flex flex-column align-items-start"
        :class="{postsWithKeyboard: keyboard}" id="here">
        <div
          v-for="(item, key) in messages" :key="key"
          class="post" :class="{myPosts: item.name == user}">
          <span>{{item.name}}</span>
          <p class="msgBody">{{item.body}}</p>
          <span>{{item.date}}</span>
        </div>

        <div class="input d-flex align-items-center">
          <!-- <b-form-input v-model="messageInput"
            class="my-1 mr-2"
            type="text"
            @focus.native="keyboard = true"
            @blur.native="keyboard = false"
            placeholder="Enter your message"></b-form-input> -->
          <b-form-input v-model="messageInput"
            class="my-1 mr-2"
            type="text"
            placeholder="Enter your message"></b-form-input>
          <b-button
            class="my-2" variant="danger" @click="writeNewPost">
            Send
          </b-button>
        </div>

      </div>

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
      keyboard: false,
    };
  },
  updated() {
    const div = document.getElementById('here');
    console.log(div);
    console.log(div.scrollHeight);
    div.scrollTop = div.scrollHeight - div.clientHeight;
  },
  mounted() {
    this.user = this.$store.state.user;
    this.getPosts();
    this.isLoading = false;
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
      this.scrollThisShit();
    },
    getPosts() {
      firebase.database().ref('mainChat').on('value', (data) => {
        this.messages = data.val();
      });
    },
    scrollThisShit() {
      const div = document.getElementById('here');
      console.log(div);
      div.scrollTop = div.scrollHeight - div.clientHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
  .chat-content{
    // padding: 60px 0 120px 0;
    height: auto;
    // height: calc(100vh - 120px);
    // padding-top: 60px;
    padding: 60px 0;
    width: 100vw;
    overflow-y: scroll;
  }
  .posts-container{
    width: 90vw;
  }
  .postsWithKeyboard{
    height: 100px;
  }
  .input{
    // position: fixed;
    // top: calc(100vh - 120px);
    // // top: 450px;
    // margin-left: 10px;
    height: 60px;
    width: 90%;
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
  .msgBody{
    max-width: 85vw;
    word-break: break-all;
  }
</style>
