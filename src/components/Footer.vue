<template>
  <div class="footer-div">
    <div class="col footer-col-1">
      <div class="row">
        <img
          class="footer-logo util-margin-small"
          alt="logo"
          :src="require('@/assets/images/logo.png')"
        />
      </div>
      <div class="row util-margin-small">
        <p>
          <i class="util-margin-right-small fas fa-map-marker-alt"></i>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Provident dignissimos possimus
          blanditiis aliquam enim quam facere saepe nesciunt
        </p>
      </div>
      <div class="row">
        <i class="util-margin-small fas fa-phone-volume"></i>+1-543-123-4567
      </div>
      <div class="row">
        <i class="util-margin-small far fa-envelope"></i>info@huddle.com
      </div>
    </div>
    <div class="col footer-col-2">
      <div class="row">About Us</div>
      <div class="row">What We Do</div>
      <div class="row">FAQ</div>
    </div>
    <div class="col footer-col-3">
      <div class="row">Career</div>
      <div class="row">Blog</div>
      <div class="row">Contact Us</div>
    </div>
    <div class="col footer-col-4">
      <i class="footer-icon fab fa-facebook-square"></i>
      <i class="footer-icon fab fa-twitter-square"></i>
      <i class="footer-icon fab fa-instagram-square"></i>
      <div class="col footer-col-5">
        © Copyright 2020 Huddle <br> Made by CodeMeKathy <br>&& Designed by Frontend
        Mentors
      </div>
    </div>
    <!-- <div class="row"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
@import '@/sass/main.scss';

.footer {
  &-div {
    display: flex;
    justify-content: space-between;
    padding: 10rem 5rem;
    height: 35vh;
    /* background: url("../assets/images/SeaBlue.jpg"); */
    background-color: hsl(192, 100%, 9%);
    color: whitesmoke;
  }
  &-logo {
    height: 2rem;
  }
  &-icon {
    border-radius: 55%;
    height: 16rem;
    margin: 0.75rem;
  }
  &-col-1 {
    width: 25rem;
  }
  &-col-2 {
    width: 15rem;
    margin: 1.5rem;
  }
  &-col-3 {
    width: 15rem;
    margin: 1.5rem;
  }
  &-col-4 {
    width: 15rem;
    margin: 1.5rem;
  }
  &-col-5 {
    width: 40rem;
    // margin-left: -20rem;
  }
}
.fa-phone-volume {
  transform: skewX(30deg);
}
</style>
