<template>
  <div class="hero-div">
    <div class="wrapper">
      <h1>PHANTOM III</h1>
      <button>How it Works</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroDiv'
  // props: {

  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-div {
  background-image: url('../assets/images/Piggy-Pink.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
}
.wrapper {
  justify-content: center;
}
</style>
