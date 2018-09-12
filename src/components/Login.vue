<template>
    <div class="login">
        <div>
            <Welcome/>
        </div>

        <div class="wrapper">
            <h3>Log in</h3>
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button @click="login"> Login </button>
            <p>Don't have an account?</p>
            <p><router-link to="/signup">Create one</router-link></p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Welcome from '@/components/Welcome.vue';

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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: white;
        margin: 10px;
        height: 100vh;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

      h3{
        margin: 5px 5px 0px 5px;
        text-transform: uppercase;
        font-size: 1.5rem;
        letter-spacing: 3px;
        text-shadow: 2px 2px black;
      }
      input{
          border: 1px solid black;
          border-radius: 10px;
          margin: 5px;
          padding: 10px;
      }
      button{
          border: 1px solid black;
          border-radius: 10px;
          margin: 5px 5px 20px 5px;
          padding: 5px;
          font-size: 1rem;
          font-weight: bold;
      }
      p{
        margin: 5px 5px 0px 5px;
        a{
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.8rem;
            font-weight: 900;
            color: red;
            text-shadow: 2px 2px black;
            margin: 0;
            letter-spacing: 3px;
        }
      }
    }
</style>
