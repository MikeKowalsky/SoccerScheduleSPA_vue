<template>
    <div class="Login">
        <h3>Log in</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="login" >Login</button>
        <p>Don't have an account! Create <router-link to="/signup">one</router-link>!</p>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
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
