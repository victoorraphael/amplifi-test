import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    savePosts (state, payload) {
      Object.assign(state.posts, payload)
    }
  },
  actions: {
    getPosts (context) {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(body => {
          context.commit('savePosts', body)
          return body
        })
    }
  },
  modules: {
  }
})
