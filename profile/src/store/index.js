import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titlePage: "",
  },
  mutations: {
    setTitlePage: (state, value) => {
      state.titlePage = value;
    },
  },
  actions: {},
  modules: {},
});
