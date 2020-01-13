import Vue from 'vue'
import Vuex, { StoreOptions, Module, ActionTree, MutationTree } from 'vuex'
import { TAppState, TAuthState } from './types/TState'

Vue.use(Vuex)
const state: TAuthState = {
  userContext: {
    userId: null,
    token: '',
    invited: false,
    role: 0,
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
  setUserRole({ commit }, payload) {
    commit('setUserRole', payload)
  },
}
const mutations: MutationTree<TAuthState> = {
  setUserLoggedIn(state, payload) {
    state.userContext.token = payload.token
  },
  setUserLoggedOut(state) {
    state.userContext = {
      userId: null,
      token: '',
      invited: false,
      role: 0,
    }
  },
  setUserAuthToken(state, payload) {
    state.userContext.token = payload.token
  },
  setCreatePasswordPage(state) {
    state.userContext.invited = true
  },
  setUserRole(state, payload) {
    state.userContext.role = payload.role
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
