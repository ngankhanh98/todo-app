import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        username: String,
        fullname: String,
        email: String,
        authenticated: false
    },
    getters: {
        username: state => state.username,
        fullname: state => state.fullname,
        authenticated: state => state.authenticated
    },
    mutations: {
        LOGIN_SUCCEEDED: (state, payload) => {
            state.username = payload.username
            state.fullname = payload.fullname
            state.email = payload.email
            state.authenticated = true

            console.log('state', state)
        },
    },
    actions: {
        login: async ({ commit, dispatch }, { username, password }) => {
            const uri = process.env.VUE_APP_BASE_URL + '/auth/login'
            await axios.post(uri, { username: username, password: password }).then((result) => {
                commit("LOGIN_SUCCEEDED", result.data)
                dispatch('app/changeState', { status: result.status, message: result.statusText }, { root: true })
            }).catch((err) => {
                console.log('err', err)
                dispatch('app/changeState', { status: err.response.statusCode, message: err.response.message }, { root: true })
            });
        },

        resetPassword: async ({ dispatch }, password) => {
            const uri = process.env.VUE_APP_BASE_URL + '/auth/reset-password'
            await axios.post(uri, password).then((result) => {
                console.log('result', result)
                dispatch('app/changeState', { status: result.status, message: result.statusText }, { root: true })
            }).catch((err) => {
                console.log('err', err)
                dispatch('app/changeState', { status: err.response.statusCode, message: err.response.message }, { root: true })
            });
        }
    },
})
