import Vue from "vue";
import Vuex, { StoreOptions, Module, ActionTree, MutationTree } from "vuex";
import { TAppState, TAuthState } from "./types/TState";

Vue.use(Vuex);
const state: TAuthState = {
  userContext: {
    userId: null,
    isLoggedIn: false,
    token: "",
    invited: false
  }
};
const namespaced: boolean = true;
const actions: ActionTree<TAuthState, TAppState> = {
  signedIn({ commit }, payload) {
    commit("setUserLoggedIn", payload);
  },
  signedOut({ commit }) {
    commit("setUserLoggedOut");
  },
  setAuthToken({ commit }, payload) {
    commit("setUserAuthToken", payload); // TODO: checken token expiry
  },
  setCreatePasswordPage({ commit }) {
    commit("setCreatePasswordPage");
  }
};
const mutations: MutationTree<TAuthState> = {
  setUserLoggedIn(state, payload) {
    state.userContext.token = payload.token;
  },
  setUserLoggedOut(state) {
    state.userContext.token = "";
  },
  setUserAuthToken(state, payload) {
    state.userContext.token = payload.token;
  },
  setCreatePasswordPage(state) {
    state.userContext.invited = true;
  }
};
const authenticationModule: Module<TAuthState, TAppState> = {
  namespaced,
  state,
  actions,
  mutations
};
const store: StoreOptions<TAppState> = {
  state: {
    version: "1"
  },
  modules: {
    authenticationModule
  }
};
export default new Vuex.Store<TAppState>(store);
