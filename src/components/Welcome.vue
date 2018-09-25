<template>
    <div class="d-flex flex-column align-items-center">
        <p class="my-0 text-danger font-weight-bold">Welcome   in</p>
        <div class="welcome d-flex flex-column align-items-center">
            <h1 class="my-0 font-weight-bold text-center">
                Premier
            </h1>
            <h2 class="my-0 font-weight-bold text-center">Schedule</h2>
            <!-- <p class="my-0 text-danger font-weight-bold">best soccer schedule app!</p> -->
        </div>
        <div class="d-flex flex-column align-items-center">
            <img class="logo" src='../assets/premierLeague.png' alt="lion logo">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang="scss" scoped>
    p{
        text-transform: uppercase;
        align-self: start;
        font-size: 1.3em;
        letter-spacing: 2px;
    }
    .welcome{
        text-transform: uppercase;
        transform: rotate(-10deg);
        color: black;
        h1{
            font-size: 4em;
        }
        h2{
            font-size: 3.4em;
        }
    }
    .logo{
        height: 25vh;
    }
</style>
