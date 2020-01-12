<template>
  <div class="container">
    <nav-bar></nav-bar>
    <hero-div></hero-div>
    <business-div></business-div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import HeroDiv from './HeroDiv'
import BusinessDiv from './BusinessDiv'

export default {
  components: {
    'nav-bar': NavBar,
    'hero-div': HeroDiv,
    'business-div': BusinessDiv
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
