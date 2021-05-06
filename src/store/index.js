import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },
  mutations: {
    savePosts (state, payload) {
      Object.assign(state.posts, payload)
    },
    saveComments (state, payload) {
      Object.assign(state.comments, payload)
    }
  },
  actions: {
    async getPosts (context) {
      return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(body => {
          context.commit('savePosts', body)
          return body
        })
    },
    async getComments (context) {
      return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(r => r.json())
        .then(body => {
          context.commit('saveComments', body)
          return body
        })
    }
  }
})
