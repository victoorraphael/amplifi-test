<template>
  <div class="home">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :commentsSize="commentsSize(post.id)"
      @click="showComments"/>
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

    this.getComments()
      .then(comments => (this.comments = [...comments]))
  },
  data () {
    return {
      posts: [],
      comments: []
    }
  },
  methods: {
    ...mapActions(['getPosts', 'getComments']),
    commentsSize (postId) {
      return this.comments.filter(comm => comm.postId === postId).length
    },
    showComments (postId) {
      this.$router.push(`/post/comments/${postId}`)
    }
  }
}
</script>

<style lang="scss" scoped="true">
.home {
  .post + .post {
    margin-top: 10px;
  }
}
</style>
