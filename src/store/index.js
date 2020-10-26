import { createStore } from 'vuex'
import user from './user.module'
import app from './app.module'

export default createStore({
  modules: {
    user, app
    // user: {
    //   namespaced: true,
    //   state: {
    //     username: String,
    //     fullname: String,
    //     email: String,
    //     authenticated: Boolean
    //   },
    //   mutations: {
    //     LOGIN_SUCCEEDED: (state, payload) => {
    //       state.username = payload.username
    //       state.fullname = payload.fullname
    //       state.email = payload.email
    //     },
    //   },
    //   actions: {
    //     login: async ({ commit, dispatch }, { username, password }) => {
    //       const uri = process.env.VUE_APP_BASE_URL + '/auth/login'
    //       await axios.post(uri, { username: username, password: password }).then((result) => {
    //         console.log('result', result)
    //         commit("LOGIN_SUCCEEDED", result.data)
    //         dispatch('app/changeState', { status: result.status, message: result.statusText }, { root: true })
    //       }).catch((err) => {
    //         console.log('err', err)
    //         dispatch('app/changeState', { status: 'error', message: err.message }, { root: true })
    //       });
    //     }
    //   },
    // },
    // app: {
    // namespaced: true,
    // state: {
    //   status: String,
    //   message: String
    // },
    // mutations: {
    //   SET_STATUS: (state, status) => {
    //     state.status = status
    //   },
    //   SET_MESSAGE: (state, message) => {
    //     state.message = message
    //   },
    // },
    // actions: {
    //   changeState: ({ commit }, { status, message }) => {
    //     commit("SET_MESSAGE", status)
    //     commit('SET_MESSAGE', message)
    //   }
    // }
    // }
  }
})
