<template>
  <div class="home">

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  mounted () {
    this.getPosts()
      .then(posts => (this.posts = [...posts]))
  }
}
</script>
