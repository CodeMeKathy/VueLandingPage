<template>
  <div class="hero-div">
    <div class="wrapper row">
      <div class="col-left col-1-of-2">
        <h1 class="hero-title util-margin-bottom-small">
          Build The Community
          <br />Your Fans Will Love
        </h1>
        <p class="hero-sub-title heading-tertiary util-margin-bottom-small">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button class="hero-btn">Get Started For Free</button>
        <!-- <img
          class="hero-image"
          src="../assets/images/image001.png"
          alt=""
          width="300"
          height="200"
        />-->
      </div>
      <div class="col-right col-1-of-2">
        <img class="hero-image" src="../assets/images/illustration-mockups.svg" alt />
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
<style scoped lang="scss">
@import "@/sass/main.scss";

.hero {
  &-div {
    // margin-bottom: $util-margin-bottom-medium;
    background-image: url("../assets/images/bg-hero-desktop.svg");
    background-size: cover;
    background-color: hsl(193, 100%, 96%);
    height: 100vh;
    width: 99.2vw;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
  }
  &-sub-title {
    width: 30rem;
  }
  &-image {
    width: 20rem;
  }
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
  justify-content: center;
}
.row {
  flex-direction: row !important;
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
}
.col-1-of-2 {
  margin: auto 0;
  padding: 6rem;
  /* align-self: center; */
  /* place-items: center; */
  /* justify-items: center; */
  /* flex-direction: column; */
  /* width: 45%; */
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
// img.hero-image {
//   justify-self: end;
//   width: 500px;
//   height: 300px;
// }

//! Media Queries

@media only screen and (max-width: 947px) {
  // img.hero-image {
  //   width: 350px;
  //   height: 300px;
  // }
}

//!  Media Queries

/* Mobile Phones */
@media (max-width: 414px) {
  .hero {
    &-div {
      place-content: center;
      padding: 0 !important;
      margin-bottom: $util-margin-bottom-medium;
      padding: 1rem;
      display: flex;
      place-items: center;
      width: 99.9vw;
      .row {
        flex-direction: column !important;
      }
      .col {
        flex-direction: row !important;
      }
    }
    &-image {
      margin-left: 0.75rem;
    }
  }
  div.wrapper.row {
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
  }
  .hero-title {
    font-size: 1rem;
    text-align: center;
  }
  div.col-left.col-1-of-2 {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .hero-btn {
    margin-left: 3rem;
  }
  .col-1-of-2 {
    margin: auto 0;
    padding: 0rem;
  }
  .heading-tertiary {
    width: 20rem;
    text-align: center;
  }
}
</style>

// -ms-transform: rotate(180deg); /* IE 9 */ -webkit-transform: rotate(180deg);
/* Safari prior 9.0 */ transform: rotate(180deg); /* Standard syntax */
