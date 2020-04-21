<template>
  <nav id="nav-color">
    <!-- Nav Logo Div Begins -->
    <div id="nav-logo-div">
      <div>
        <img
          id="navLogo"
          alt="Nav logo"
          :src="require('@/assets/images/logo.svg')"
        />
      </div>
      <div id="logo-text">
        <span class="logo-font" id="logoFont"></span>
      </div>
    </div>
    <!-- Nav Logo Div Ends -->
    <!-- Nav Menu Begins -->
    <div id="nav-menu" class="nav-menu-absolute">
      <div class="nav-item">
        <router-link to="/" exact>start with connections</router-link>
      </div>
      <div class="nav-item">
        <img
          id="userIcon"
          alt="you come first"
          :src="require('@/assets/images/icons/person.svg')"
        />
        <router-link to="/learnmore">what we do</router-link>
      </div>
      <div class="nav-item">
        <img
          id="branchIcon"
          alt="Colored Branch Icon"
          :src="require('@/assets/images/icons/branch.svg')"
        />
        <router-link to="/about">contact us</router-link>
      </div>
    </div>
    <!-- Nav Menu Ends -->
  </nav>
</template>

<script>
export default {
  name: 'WebNav',
  mounted() {
    window.onscroll = this.stickMenu
  },
  methods: {
    stickMenu() {
      let colorBranchIconSrc = require('@/assets/images/icons/branch.svg')
      let blackBranchIconSrc = require('@/assets/images/icons/branchAlt.svg')
      let colorUserIconSrc = require('@/assets/images/icons/person.svg')
      let blackUserIconSrc = require('@/assets/images/icons/personAlt.svg')
      let colorNavLogoSrc = require('@/assets/images/logo.svg')
      let blackNavLogoSrc = require('@/assets/images/logo-alt.svg')

      let navMenu = document.getElementById('nav-menu')
      let pokus =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      let sticker = pokus - navMenu.offsetHeight
      let userIcon = document.getElementById('userIcon')
      let branchIcon = document.getElementById('branchIcon')
      let navLogo = document.getElementById('navLogo')
      let logoFont = document.getElementById('logoFont')

      if (window.pageYOffset >= sticker) {
        navMenu.classList.remove('nav-menu-absolute')
        navMenu.classList.add('sticky')
        logoFont.classList.add('sticky-logo')
        //! Icons transition to black icons
        userIcon.src = blackUserIconSrc
        branchIcon.src = blackBranchIconSrc
        navLogo.src = blackNavLogoSrc
      } else {
        navMenu.classList.add('nav-menu-absolute')
        navMenu.classList.remove('sticky')
        //! Icons transition back to pink color icons
        userIcon.src = colorUserIconSrc
        branchIcon.src = colorBranchIconSrc
        navLogo.src = colorNavLogoSrc
        logoFont.classList.remove('sticky-logo')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Outer Nav Container
#nav-color {
  height: 0px;
  display: block;
  justify-content: space-between;
  // color: #ff52bf;
}
#nav-logo-div {
  display: flex;
  padding: 1.5rem 0px 0.5rem 2rem;
  width: 6rem; // 160px
}
#navLogo {
  padding-right: 0.45rem;
  // padding-top: 0.3rem;
  height: 35px;
}
#logo-text {
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.2rem;
  padding-top: 1.5rem;
}

.nav-item {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}
.nav-item img {
  margin-right: 9px;
  height: 15px;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: 200;
}
.router-link-active {
  font-weight: 400;
}
@media only screen and (min-width: 64rem) {
  // #nav-color {
  //   height: 100vh;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  #nav-logo-div {
    // padding: 2rem 0px 30px 2rem;
    width: 160px;
    position: fixed;
    // background-color: #6767;
  }
  #nav-menu {
    right: 0;
    color: #ff52bf;
    width: 40%;
    padding: 0rem 10px 1rem 0px;
  }
  .nav-menu-absolute {
    position: absolute;
    bottom: 0;
  }
  .sticky {
    position: fixed;
    top: 0;
    bottom: auto;
    color: #00252e !important;
    padding-bottom: 0px !important;
    padding-top: 15px !important;
  }
  .sticky-logo {
    color: #00252e;
  }
  .sticky-image {
    height: 16px;
    width: 16px;
    // fill: black;
  }
  .nav-item {
    display: inline-block;
    margin-left: 1.5rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 200;
  }
  .router-link-active {
    font-weight: 400;
  }
}

/*! Media Queries */

/* Mobile Phones */
@media (max-width: 414px) {
  div#nav-menu.nav-menu-absolute {
    display: none;
  }
}
</style>
