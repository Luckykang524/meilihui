import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavbarShow: true
  },
  mutations: {
    hide (state) {
      state.isNavbarShow = false
    },
    show (state) {
      state.isNavbarShow = true
    }
  },
  actions: {
  },
  modules: {
  }
})
