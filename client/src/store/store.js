import Vue from "vue";
import Vuex from "vuex";
import { lyricMutations } from "./mutations";
import { lyricActions } from "./actions";
import { lyricGetters } from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLoading: false,
    lyrics: []
  },
  mutations: Object.assign({}, lyricMutations),
  actions: Object.assign({}, lyricActions),
  getters: Object.assign({}, lyricGetters)
});
