import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Links R Us!",
    links: [
      'http://www.coursetro.com',
      'http://www.google.com',
      'http://www.facebook.com',
    ]
  },
  // Getters: perform calculations on data dynamically
  getters: {
    countLinks: (state) => {
      return state.links.length
    }
  },
  //Mutations: Change state data synchronously, think this.setState()
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = []
    }
  },
  //Actions: Change the state Asynchronously, much like thunk
  // NB: Use quotation marks in the commit. Context gives you access to commit function
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll: ({ commit }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
});
