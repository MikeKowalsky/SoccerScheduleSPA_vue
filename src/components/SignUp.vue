<template>
    <div class="SignUp">
        <h3>Let's create new account</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>.. or go back to <router-link to="/login">login</router-link> ... </span>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    };
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
    input{
        border: 1px solid black;
        border-radius: 5px;
        margin: 3px;
        padding: 3px;
    }
    button{
        border: 1px solid black;
        border-radius: 5px;
        margin: 3px;
        padding: 3px;
    }
</style>
