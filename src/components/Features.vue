<template>
  <div class="features-div container">
    <div class="wrapper col">
      <div class="row features-box">
        <div class="col-1-of-2">
          <h3
            class="features-box-heading-secondary heading-secondary util-margin-bottom-small"
          >Grow Together</h3>
          <p class="features-box-heading-tertiary heading-tertiary">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div class="col-1-of-2">
          <img
            src="../assets/images/illustration-grow-together.svg"
            class="features-image-left"
            alt
          />
        </div>
      </div>
      <div class="row features-box">
        <div class="col-1-of-2 left">
          <h3
            class="features-box-heading-secondary heading-secondary util-margin-bottom-small"
          >Flowing Conversations</h3>
          <p class="features-box-heading-tertiary heading-tertiary">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
        <div class="col-1-of-2">
          <img
            src="../assets/images/illustration-flowing-conversation.svg"
            class="features-image-right"
            alt
          />
        </div>
      </div>
      <div class="row features-box">
        <div class="col-1-of-2">
          <h3
            class="features-box-heading-secondary heading-secondary util-margin-bottom-small"
          >Your Users</h3>
          <p class="features-box-heading-tertiary heading-tertiary">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div class="col-1-of-2">
          <img src="../assets/images/illustration-your-users.svg" class="features-image-left" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features"
  // props: {

  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/sass/main.scss";

.features-div {
  /* background-image: url('../assets/images/Jaipur.jpg'); */
  // background-size: cover;
  // height: 255vh;
  width: 98vw;
  display: flex;
  justify-content: center;
}
// .col {
//   width: 100vw;
//   flex-direction: column;
// }
.features {
  &-image-left {
    width: 20rem;
    float: right;
    margin-top: -13rem;
  }
  &-image-right {
    width: 20rem;
    float: left;
  }
  &-box {
    width: 55rem;
    border: 0.5px solid #c3ced8;
    box-shadow: 0 1.5rem 4rem rgba(#808d99, 0.15);
    border-radius: 10px;
    padding: 2.5rem;
    margin: 6rem;
    height: 20rem;
    flex-direction: row !important;
  }
  &-sub-title {
    width: 30rem;
    margin: 0;
  }
}
// .col-1-of-2 {
// }
.col-1-of-2.left {
  float: right !important;
}

.features-box {
  &-heading-secondary {
    margin-top: 5.5rem;
  }
  &-heading-tertiary {
    color: #808d99;
  }
}

/*! Media Queries */

/* Mobile Phones */
@media (max-width: 414px) {
  .wrapper.col {
    // width: 100vw;
    // margin: 0 auto;
    display: flex;
  }
  .features {
    &-image-left {
      width: 16rem;
      // float: right;
      margin-top: 0rem;
    }
    &-image-right {
      width: 16rem;
      // float: left;
    }
    &-box {
      width: 16rem;
      height: 30rem;
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-direction: column-reverse !important;
      margin-bottom: $util-margin-bottom-medium;
    }
    &-box-heading-secondary {
      font-size: 1.2rem;
    }
    &-box-heading-tertiary {
      font-size: 0.85rem;
      width: 15rem;
    }
  }
  p {
    margin: 0 auto;
  }
  div.col-1-of-2.left {
    margin-left: -1rem;
    width: 16rem;
    // left: 0;
  }
}
</style>
