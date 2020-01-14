<template>
  <nav id="nav-white">
    <div id="nav-logo">
      <div>
        <img id="luxLogo" alt="Lux logo" :src="require('@/assets/logo.png')" />
      </div>
      <div id="logo-text">
        <span class="logo-font" id="logoFont">Lux</span>
      </div>
    </div>
    <div id="nav-menu" class="nav-menu-absolute">
      <div class="nav-item">
        <router-link to="/" exact>start with why</router-link>
      </div>
      <div class="nav-item">
        <img
          id="userIcon"
          alt="you come first"
          :src="require('@/assets/images/icons/person.svg')"
        />
        <router-link to="/learnmore">you come first</router-link>
      </div>
      <div class="nav-item">
        <img
          id="branchIcon"
          alt="catch the wave"
          :src="require('@/assets/images/icons/branch.svg')"
        />
        <router-link to="/about">come visit us</router-link>
      </div>
    </div>
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
      let whiteBranchIconSrc = require('@/assets/images/icons/branch.svg')
      let blackBranchIconSrc = require('@/assets/images/icons/branchAlt.svg')
      let whiteUserIconSrc = require('@/assets/images/icons/person.svg')
      let blackUserIconSrc = require('@/assets/images/icons/personAlt.svg')
      let whiteLuxLogoSrc = require('@/assets/logo.png')
      let blackLuxLogoSrc = require('@/assets/logo.png')

      let navMenu = document.getElementById('nav-menu')
      let pokus =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      let sticker = pokus - navMenu.offsetHeight
      let userIcon = document.getElementById('userIcon')
      let branchIcon = document.getElementById('branchIcon')
      let luxLogo = document.getElementById('luxLogo')
      let logoFont = document.getElementById('logoFont')

      if (window.pageYOffset >= sticker) {
        navMenu.classList.remove('nav-menu-absolute')
        navMenu.classList.add('sticky')
        logoFont.classList.add('sticky-logo')
        //! Icons transition to black color icons
        userIcon.src = blackUserIconSrc
        branchIcon.src = blackBranchIconSrc
        luxLogo.src = blackLuxLogoSrc
      } else {
        navMenu.classList.add('nav-menu-absolute')
        navMenu.classList.remove('sticky')
        //! Icons transition back to white color icons
        userIcon.src = whiteUserIconSrc
        branchIcon.src = whiteBranchIconSrc
        luxLogo.src = whiteLuxLogoSrc
        logoFont.classList.remove('sticky-logo')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#nav-white {
  height: 0px;
  display: block;
  justify-content: space-between;
  color: white;
}
#nav-logo {
  display: flex;
  padding: 1.5rem 0px 0.5rem 2rem;
  width: 160px;
}
#luxLogo {
  padding-right: 0.45rem;
  // padding-top: 0.3rem;
  height: 75px;
}
#logo-text {
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.2rem;
  padding-top: 1.5rem;
}
#nav-menu {
  width: 100%;
  // padding: 2rem 40px 2rem 0px;
}
.nav-item {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}
.nav-item img {
  margin-right: 9px;
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
  // #nav-white {
  //   height: 100vh;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  #nav-logo {
    // padding: 2rem 0px 30px 2rem;
    width: 160px;
    position: fixed;
    // background-color: #6767;
  }
  #nav-menu {
    right: 0;
    color: white;
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
    color: black !important;
  }
  .sticky-logo {
    color: black;
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
</style>
