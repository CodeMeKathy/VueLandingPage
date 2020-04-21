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
          <i class="util-margin-right-small fas fa-map-marker-alt"></i>Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Provident
          dignissimos possimus aepe nesciunt
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
      <div class="row footer-row">About Us</div>
      <div class="row footer-row">What We Do</div>
      <div class="row footer-row">FAQ</div>
    </div>
    <div class="col footer-col-3">
      <div class="row footer-row">Career</div>
      <div class="row footer-row">Blog</div>
      <div class="row footer-row">Contact Us</div>
    </div>
    <div class="col footer-col-4">
      <i class="footer-icon fab fa-facebook-square"></i>
      <i class="footer-icon fab fa-twitter-square"></i>
      <i class="footer-icon fab fa-instagram-square"></i>
      <div class="col footer-col-5">
        © Copyright 2020 Huddle <br />
        Made by CodeMeKathy <br />&& Designed by Frontend Mentors
      </div>
    </div>
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
    height: 32vh;
    /* background: url("../assets/images/SeaBlue.jpg"); */
    background-color: hsl(192, 100%, 9%);
    color: whitesmoke;
    // z-index: 0;
    // position: relative;
  }
  &-logo {
    height: 2rem;
  }
  &-icon {
    border-radius: 55%;
    height: 12rem;
    margin: 0.75rem;
  }
  &-col-1 {
    width: 50rem;
  }
  &-col-2 {
    width: 18rem;
    margin: 5rem;
    margin-right: 2rem;
  }
  &-col-3 {
    width: 18rem;
    margin: 5rem;
    margin-right: 3rem;
  }
  &-col-4 {
    width: 10rem;
    margin: 4rem;
    margin-right: 8rem;
  }
  &-col-5 {
    width: 20rem;
    font-size: 0.8rem;
  }
  &-row {
    padding: 0.5rem;
  }
}
.fa-phone-volume {
  transform: skewX(30deg);
}

/*! Media Queries */

/* Mobile Phones */
@media (max-width: 414px) {
  .footer {
    &-div {
      display: flex;
      flex-direction: column !important;
      // justify-content: space-between;
      // padding: 10rem 5rem;
      height: 150vh;
      /* background: url("../assets/images/SeaBlue.jpg"); */
      background-color: hsl(192, 100%, 9%);
      color: whitesmoke;
    }
    &-logo {
      height: 1rem;
    }
    &-icon {
      height: 1rem;
      margin: 0.75rem;
      margin-bottom: 1rem;
    }
    &-col-1 {
      width: 15rem;
      margin-left: -5rem;
    }
    &-col-2 {
      // width: 18rem;
      margin: 0rem;
      margin-right: 0rem;
      margin-left: -5rem;
    }
    &-col-3 {
      // width: 18rem;
      margin: 1rem;
      margin-right: 1rem;
      margin-left: -5rem;
    }
    &-col-4 {
      text-align: center;
      margin: 2rem;
    }
    &-col-5 {
      text-align: center;
      margin-left: -5rem;
      // margin: 0 auto;
      // width: 15rem;
      font-size: 0.8rem;
    }
    &-row {
      padding: 0.5rem;
    }
  }
}
</style>
