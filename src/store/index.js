import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      user: null,
      loginUI: fb.ui,
      fbAuth: fb.auth,
      fbStorage: fb.storage,
      fbDB: fb.db,
      loadedModel: null
    },
    mutations: {
      setUserProfile(state, val) {
        state.user = val
      },
      SetCurrentLoadedModel(state, val) {
        state.loadedModel = val;
      }
    },
    actions: {  
    }
  })
  
  export default store