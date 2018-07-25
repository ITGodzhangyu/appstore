import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import apptype from './modules/apptype'
import appground from './modules/appground'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    apptype,
    appground,
    user
  },
  getters
})

export default store
