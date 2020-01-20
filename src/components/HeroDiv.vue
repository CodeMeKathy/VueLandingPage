<template>
  <div class="hero-div">
    <div class="wrapper row">
      <div class="left-col">
        <h1 class="hero-title">Blossom Lotus III</h1>
        <p class="hero-sub-title">Lorem ipsum dolor sit amet, cu nec diam movet facilisis.</p>
        <button class="hero-btn">How it Works</button>
        <!-- <img
          class="hero-image"
          src="../assets/images/image001.png"
          alt=""
          width="300"
          height="200"
        />-->
      </div>
      <div class="right-col">
        <img
          class="hero-image push"
          src="../assets/images/CherryBlossomTransparent.png"
          alt
          width="500"
          height="300"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroDiv"
  // props: {

  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-div {
  background-image: url("../assets/images/Piggy-Pink.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  /* align-self: center; */
}
.hero-title {
  text-transform: uppercase;
  color: whitesmoke;
  /* padding-bottom: 5px; */
}
.hero-sub-title {
  color: whitesmoke;
  padding-bottom: 5px;
}
.wrapper {
  display: flex;
  width: 100vw;
  align-self: center;
  justify-content: space-between;
}
.row {
  flex-direction: row !important;
  flex-wrap: wrap;
}
.col {
  flex-direction: column;
}
.hero-btn {
  background-color: #7a6ed7;
  /* background-color:  #ae8ca3; */
  color: white;
  border: none;
  height: 25px;
  padding: 5px;
  border-radius: 5px;
}
.left-col {
  justify-content: center;
  align-self: center;
}
/* .right-col {
  display: flex;
  justify-content: end;
  align-self: flex-end;
} */
img.hero-image {
  justify-self: end;
}

/* .push {
  margin-left: auto;
} */
</style>

//-ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari prior 9.0 */
  transform: rotate(180deg); /* Standard syntax */
