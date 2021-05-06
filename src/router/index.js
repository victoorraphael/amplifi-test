import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostComments from '../views/PostComments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PostsList',
    component: Home
  },
  {
    path: '/post/comments/:postId',
    name: 'PostComments',
    component: PostComments
  }
]

const router = new VueRouter({
  routes
})

export default router
