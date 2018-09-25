<template>
  <div class="signUp d-flex flex-column align-items-center justify-content-around">

    <WelcomeXS v-if="keyboard"/>
    <Welcome v-else/>

    <div class="wrapper d-flex flex-column align-items-center">
      <h2 class="m-1 text-danger font-weight-bold">Create new account</h2>
      <b-form-input v-model="email"
        class="my-1 text-center"
        type="text"
        placeholder="Enter your email"
        @focus.native="keyboard = true"
        @blur.native="keyboard = false"></b-form-input>
      <b-form-input v-model="password"
        class="my-1 text-center"
        type="text"
        placeholder="Enter your password"
        @focus.native="keyboard = true"
        @blur.native="keyboard = false"></b-form-input>
      <b-button
        class="my-1" variant="danger" @click="signUp">Sign Up</b-button>
      <p class="mb-0 mt-2 font-weight-bold">.. or go back to ..</p>
      <h4 class="mb-1 font-weight-bold">
        <router-link to="/login">and log in</router-link>
      </h4>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Welcome from '@/components/Welcome.vue';
import WelcomeXS from '@/components/WelcomeXS.vue';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      keyboard: false,
    };
  },
  components: {
    Welcome,
    WelcomeXS,
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          (user) => {
            console.log('Your account has been created!');
            this.$router.replace('home');
          },
          // eslint-disable-next-line
          err => alert('Something went wrong ' + err.message),
        );
    },
  },
};
</script>

<style lang="scss" scoped>
  .signUp{
    margin: 10px;
    height: 100vh;
  }
  a{
    color: black;
  }
</style>
