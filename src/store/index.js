import { createStore } from 'vuex'
import user from './user.module'
import app from './app.module'

export default createStore({
  modules: { user, app }
})
