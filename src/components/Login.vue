<template>
    <div class="login d-flex flex-column align-items-center justify-content-around">

       <Welcome/>

        <div class="wrapper d-flex flex-column align-items-center">
            <h2 class="m-1 text-danger font-weight-bold">Log in</h2>
            <b-form-input v-model="email"
                class="my-1"
                type="text"
                placeholder="Enter your email"></b-form-input>
            <b-form-input v-model="password"
                class="my-1"
                type="text"
                placeholder="Enter your password"></b-form-input>
            <b-button
                class="my-1" size="lg" variant="danger" @click="login">Login</b-button>
            <p class="mb-0 mt-4 text-danger font-weight-bold">Don't have an account?</p>
            <h3 class="mb-1 text-danger font-weight-bold">
                <router-link to="/signup">Click and create one</router-link>
            </h3>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Welcome from '@/components/Welcome.vue';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    Welcome,
    'b-form-input': bFormInput,
    'b-button': bButton,
  },
  methods: {
    login() {
      /* eslint-disable */
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            console.log('logged in ' + firebase.auth().currentUser.displayName + " !");
            this.$router.replace('home');
          })
        .catch(err => console.log('Something went wrong ' + err.message));
        /* eslint-enable */
    },
  },
};
</script>

<style lang="scss" scoped>
    .login{
        margin: 10px;
        height: 100vh;
    }
    a{
        color: #d9534f;
    }
</style>
