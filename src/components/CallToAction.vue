<template>
  <div class="cta wrapper">
    <div class="row">
      <div class="col cta-box">
        <h3 class="heading-secondary util-margin-bottom-small ">
          Ready To Build Your Community?
        </h3>
        <a href="#" class="cta-btn">Get Started For Free</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CallToAction'
}
</script>

<style scoped lang="scss">
@import '@/sass/main.scss';

.cta.wrapper {
  margin-bottom: -7rem;
  // z-index: 1;
  // position: absolute;
}

.cta {
  &-box {
    place-content: center;
    align-items: center;
    display: flex;
    width: 55rem;
    border: 0.5px solid #c3ced8;
    box-shadow: 0 1.5rem 4rem rgba(#808d99, 0.15);
    border-radius: 20px;
    padding: 2.5rem;
    margin: 0 auto;
    height: 10rem;
    position: relative;
    background-color: #fff;
  }
  &-btn {
    text-align: center;
    place-items: center;
    margin: 0 auto;
    background-color: #ff52bf;
    /* background-color:  #ae8ca3; */
    color: white;
    border: none;
    height: 2rem;
    width: 15rem;
    padding-top: 1rem;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 700;
  }
}

/*! Media Queries */

/* Mobile Phones */
@media (max-width: 414px) {
  .cta {
    &-box {
      width: 15rem;
      height: 8rem;
    }
    .heading-secondary {
      font-size: 0.89rem;
    }
  }
}
</style>
