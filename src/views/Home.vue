<template>
  <div class="home">
    <PostItem v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PostItem from '@/components/PostItem.vue'

export default {
  name: 'Home',
  components: { PostItem },
  mounted () {
    this.getPosts()
      .then(posts => (this.posts = [...posts]))
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    ...mapActions(['getPosts'])
  }
}
</script>
