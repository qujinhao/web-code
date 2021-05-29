import Vue from 'vue'
import MinUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MinUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
