import Vue from 'vue'
// @ is the path to `./src` folder
import App from '@/components/App'

import store from '@/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
