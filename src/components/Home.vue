<template>
  <div class="container">
    <nav-bar></nav-bar>
    <hero-div></hero-div>
    <features></features>
    <call-to-action></call-to-action>
    <footer-div></footer-div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import HeroDiv from "./HeroDiv";
import Features from "./Features";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

export default {
  components: {
    "nav-bar": NavBar,
    "hero-div": HeroDiv,
    features: Features,
    "call-to-action": CallToAction,
    "footer-div": Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
