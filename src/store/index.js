import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据 data
  state: {
    user: JSON.parse(window.localStorage.getItem('user')) || null,
    city: null
  },
  // 方法 methods
  mutations: {
    currentUser(state) {
      state.user = null
    },
    setUser(state, payload) {
      state.user = payload.user
    },
    setCity(state, payload) {
      state.city = payload.city
    }
  },
  // 嵌套使用方法
  actions: {
    
  },
  // 模块
  modules: {
  }
})
