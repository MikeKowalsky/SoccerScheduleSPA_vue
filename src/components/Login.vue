<template>
    <div class="Login">
        <h3>Log in</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button @click="login" >Beam!</button>
        <p>Don't have an account! Create <router-link to="/signup">one</router-link>!</p>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      sth: null,
    };
  },
  methods: {
    login() {
      this.$router.replace('home');
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
