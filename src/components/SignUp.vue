<template>
    <div class="signUp">
        <div>
            <Welcome/>
        </div>

        <div class="wrapper">
            <h3>Create new account</h3>
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button @click="signUp">Sign Up</button>
            <p>.. or go back to ..</p>
            <p><router-link to="/login">login page</router-link></p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Welcome from './Welcome.vue';

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
        font-size: 1.3rem;
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
