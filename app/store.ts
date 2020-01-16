import Vue from 'vue'
import Vuex, { StoreOptions, Module, ActionTree, MutationTree } from 'vuex'
import { TAppState, TAuthState } from './types/TState'

Vue.use(Vuex)
const state: TAuthState = {
  userContext: {
    uid: null,
    token: '',
    invited: false,
    role: 0,
    loggedIn: false,
  },
}
const namespaced: boolean = true
const actions: ActionTree<TAuthState, TAppState> = {
  signedIn({ commit }, payload) {
    commit('setUserLoggedIn', payload)
  },
  signedOut({ commit }) {
    commit('setUserLoggedOut')
  },
  setAuthToken({ commit }, payload) {
    commit('setUserAuthToken', payload) // TODO: checken token expiry
  },
  setCreatePasswordPage({ commit }) {
    commit('setCreatePasswordPage')
  },
}
const mutations: MutationTree<TAuthState> = {
  setUserLoggedIn(state, { token, uid, role, loggedIn }) {
    state.userContext = {
      token,
      uid,
      role,
      loggedIn,
    }
  },
  setUserLoggedOut(state) {
    state.userContext = {
      uid: null,
      token: '',
      invited: false,
      role: 0,
      loggedIn: false,
    }
  },
  setUserAuthToken(state, payload) {
    state.userContext = { ...state.userContext, token: payload.token }
  },
  setCreatePasswordPage(state) {
    state.userContext = { ...state.userContext, invited: true }
  },
}
const authenticationModule: Module<TAuthState, TAppState> = {
  namespaced,
  state,
  actions,
  mutations,
}
const store: StoreOptions<TAppState> = {
  state: {
    version: '1',
  },
  modules: {
    authenticationModule,
  },
}
export default new Vuex.Store<TAppState>(store)
