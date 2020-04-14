<template>
  <div class="footer-div">
    <div class="row">
      <div class="col">
        <div class="row">
          <img
            class="footer-logo"
            alt="logo"
            :src="require('@/assets/images/logo.png')"
          />
        </div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col-right">
        © Copyright 2020 Huddle Made by CodeMeKathy && Designed by Frontend
        Mentors
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

.footer-div {
  display: flex;
  justify-content: space-between;
  padding: 40px 10px;
  height: 50vh;
  /* background: url("../assets/images/SeaBlue.jpg"); */
  background-color: hsl(192, 100%, 9%);
  color: #ff52bf;
}
.footer {
  &-logo {
    height: 2.25rem;
  }
}
</style>
