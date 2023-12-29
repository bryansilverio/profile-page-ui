import { createStore } from 'vuex';

const store = createStore({
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
export default store