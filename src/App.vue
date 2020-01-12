<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
export default {
  methods: {
    updateUserAgent() {
      this.loadUserAgent(this.getUserAgent())
    },
    getUserAgent() {
      let userAgent = {}
      userAgent.width = window.screen.width
      userAgent.height = window.screen.height
      userAgent.clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      userAgent.clientHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      return userAgent
    }
  },
  created() {
    let userAgent = {}
    userAgent.width = window.screen.width
    userAgent.height = window.screen.height
    userAgent.clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    userAgent.clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    // userAgent.orientation = screen.orientation.type no safari support
    this.loadUserAgent(userAgent)
    window.addEventListener('resize', this.updateUserAgent)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
