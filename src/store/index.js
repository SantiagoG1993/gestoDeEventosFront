import { createStore } from 'vuex'

export default createStore({
  state: {

    token:null,
    authCustomer:{}

  },
  getters: {
  },
  mutations: {
    setToken(state,token){
      state.token = token;
    },

    setAuthCustomer(state,customer){
    state.authCustomer = customer
    }

  },
  actions: {
  },
  modules: {
  }
})
