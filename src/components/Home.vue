<template>
  <div class="container">
    <nav-bar></nav-bar>
    <hero-div></hero-div>
  </div>
</template>

<script>
import NavBar from "./NavBar"
import HeroDiv from "./HeroDiv"

export default {
  components: {
    "nav-bar": NavBar,
    "hero-div": HeroDiv

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
