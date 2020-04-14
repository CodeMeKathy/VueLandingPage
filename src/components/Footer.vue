<template>
  <div class="footer-div">
    <div class="col">
      <div class="row">
        <img
          class="footer-logo"
          alt="logo"
          :src="require('@/assets/images/logo.png')"
        />
      </div>
      <div class="row">
        <i class="fas fa-map-marker-alt"></i>Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Provident dignissimos possimus blanditiis
        aliquam enim quam facere saepe nesciunt
      </div>
      <div class="row"><i class="fas fa-phone-volume"></i>+1-543-123-4567</div>
      <div class="row"><i class="far fa-envelope"></i>info@huddle.com</div>
    </div>
    <div class="col">
      <div class="row">About Us</div>
      <div class="row">What We Do</div>
      <div class="row">FAQ</div>
    </div>
    <div class="col">
      <div class="row">Career</div>
      <div class="row">Blog</div>
      <div class="row">Contact Us</div>
    </div>
    <div class="col">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter-square"></i>
      <i class="fab fa-instagram-square"></i>
      <div class="col">
        © Copyright 2020 Huddle Made by CodeMeKathy && Designed by Frontend
        Mentors
      </div>
    </div>
    <div class="row"></div>
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
    padding: 40px 10px; 
    height: 50vh;
    /* background: url("../assets/images/SeaBlue.jpg"); */
    background-color: hsl(192, 100%, 9%);
    color: whitesmoke;
  }
  &-logo {
    height: 2rem;
  }
}
</style>
