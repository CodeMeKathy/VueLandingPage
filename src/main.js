import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.component('home', Home) // Needed to register the component globally and render to the page. A single `Home` component allows for better organization and subsequent components can be added locally.

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
