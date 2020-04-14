<template>
  <div class="footer-div">
    <div class="left-col heading-tertiary">© 2020 Huddle</div>
    <div class="right-col heading-tertiary">
      Made by CodeMeKathy && Designed by Frontend Mentors
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
  height: 10vh;
  /* background: url("../assets/images/SeaBlue.jpg"); */
  background-color: hsl(192, 100%, 9%);
  color: #ff52bf;
}
</style>
