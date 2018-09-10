<template>
    <div class="SignUp">
        <h3>Let's create new account</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button>Beam!</button>
        <span>.. or go back to <router-link to="/login">login</router-link> ... </span>
    </div>
</template>

<script>
export default {
  name: 'SignUp',
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
