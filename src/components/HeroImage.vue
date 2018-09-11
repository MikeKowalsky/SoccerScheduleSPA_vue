<template>
    <div class="heroImage">
    </div>
</template>

<script>
export default {
  name: 'HeroImage',
};
</script>

<style lang="scss" scoped>
    .heroImage{
        position: fixed;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
        background-image: url('../assets/soccer01em.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        // content: url('./assets/soccer01em.jpg');
    }
    .heroImage::after{
        content: '';
        background: rgba(0, 0, 0, .4);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100vh;
        }
</style>
