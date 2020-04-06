<template>
  <div class="hero-div">
    <div class="wrapper row">
      <div class="left-col">
        <h1 class="hero-title">
          Build The Community
          <br />Your Fans Will Love
        </h1>
        <p
          class="hero-sub-title"
        >Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        <button class="hero-btn">Get Started For Free</button>
        <!-- <img
          class="hero-image"
          src="../assets/images/image001.png"
          alt=""
          width="300"
          height="200"
        />-->
      </div>
      <div class="right-col">
        <img class="hero-image push" src="../assets/images/illustration-mockups.svg" alt />
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
  background-image: url("../assets/images/bg-hero-desktop.svg");
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
  /* color: black; */
  /* padding-bottom: 5px; */
}
.hero-sub-title {
  /* color: whitesmoke; */
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
  background-color: #ff52bf;
  /* background-color:  #ae8ca3; */
  color: white;
  border: none;
  width: 215px;
  padding: 10px;
  border-radius: 20px;
}
.left-col {
  padding-left: 20px;
  align-self: center;
}
/* .right-col {
  display: flex;
  justify-content: end;
  align-self: flex-end;
} */
img.hero-image {
  justify-self: end;
  width: 500px;
  height: 300px;
}

@media only screen and (max-width: 947px) {
  img.hero-image {
    width: 350px;
    height: 300px;
  }
}
</style>

// -ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari prior 9.0 */
  transform: rotate(180deg); /* Standard syntax */
