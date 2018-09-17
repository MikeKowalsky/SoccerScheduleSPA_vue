<template>
  <div class="signUp d-flex flex-column align-items-center justify-content-around">

    <Welcome/>

    <div class="wrapper d-flex flex-column align-items-center">
      <h2 class="m-1 text-danger font-weight-bold">Create new account</h2>
      <b-form-input v-model="email"
        class="my-1"
        type="text"
        placeholder="Enter your email"></b-form-input>
      <b-form-input v-model="password"
        class="my-1"
        type="text"
        placeholder="Enter your password"></b-form-input>
      <b-button
        class="my-1" size="lg" variant="danger" @click="signUp">Sign Up</b-button>
      <p class="mb-0 mt-4 text-danger font-weight-bold">.. or go back to ..</p>
      <h3 class="mb-1 text-danger font-weight-bold">
        <router-link to="/login">and log in</router-link>
      </h3>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    Welcome,
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
    color: #d9534f;
  }
</style>
