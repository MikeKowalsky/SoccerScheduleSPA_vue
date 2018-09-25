<template>
    <div class="login d-flex flex-column align-items-center justify-content-around">

        <WelcomeXS v-if="keyboard"/>
        <Welcome v-else/>

        <div class="wrapper d-flex flex-column align-items-center">
            <h2 class="m-1 text-danger font-weight-bold">Log in</h2>
            <b-form-input
                v-model="email"
                class="my-1 text-center"
                type="text"
                placeholder="Enter your email"
                @focus.native="keyboard = true"
                @blur.native="keyboard = false"></b-form-input>
            <b-form-input
                v-model="password"
                class="my-1 text-center"
                type="password"
                placeholder="Enter your password"
                @focus.native="keyboard = true"
                @blur.native="keyboard = false"></b-form-input>
            <b-button
                class="my-1" size="lg" variant="danger" @click="login">Login</b-button>
            <p class="mb-0 mt-2 font-weight-bold">Don't have an account?</p>
            <h4 class="mb-1 font-weight-bold">
                <router-link to="/signup">Click here and create one</router-link>
            </h4>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Welcome from '@/components/Welcome.vue';
import WelcomeXS from '@/components/WelcomeXS.vue';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Login',
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
    a, p{
        color: #3D195B;
        // color: #d9534f;
    }
</style>
