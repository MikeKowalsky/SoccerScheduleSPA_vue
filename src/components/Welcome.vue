<template>
    <div class="welcome">
        <p>Welcome in</p>
        <h1>Schedule</h1>
        <p>best soccer schedule app!</p>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang="scss" scoped>
    .welcome{
        margin: 5px 10px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        text-transform: uppercase;
        h1{
            text-transform: uppercase;
            font-size: 3.5rem;
            transform: rotate(-15deg);
        }
    }
</style>
