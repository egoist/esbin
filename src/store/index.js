import Vue from 'vue'
import Vuex from 'vuex'
import * as app from '@/store/modules/app'
import * as tabs from '@/store/modules/tabs'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tabs
  }
})

export default store
