export default ({
    namespaced: true,
    state: {
        status: String,
        message: String
    },
    mutations: {
        SET_STATUS: (state, status) => {
            state.status = status
        },
        SET_MESSAGE: (state, message) => {
            state.message = message
        },
    },
    actions: {
        changeState: ({ commit }, { status, message }) => {
            commit("SET_MESSAGE", status)
            commit('SET_MESSAGE', message)
        }
    }
})
