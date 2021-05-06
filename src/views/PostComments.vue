<template>
  <section>
    <div v-if="comments.length > 0">
      <div class="post__detail">
        <p class="post__detail__title">{{ post.title | capitalize }}</p>
        <p class="post__detail__body">{{ post.body | capitalize }}</p>
      </div>
      <span class="section__title">Comments</span>
      <CommentItem
        v-for="comm in comments"
        :key="comm.id"
        :comment="comm"
      />
    </div>
    <div v-else>
      <p>Ooops... ocorreu um erro</p>
    </div>
    <div class="btn-container">
      <button class="button" @click="back">Voltar</button>
    </div>
  </section>
</template>

<script>
import string from '@/mixins/string'
import CommentItem from '@/components/CommentItem'

export default {
  name: 'PostComments',
  mixins: [string],
  components: { CommentItem },
  props: {
    postId: String
  },
  mounted () {
    this.getPost()
    this.filterComments()
  },
  data () {
    return {
      post: {},
      comments: []
    }
  },
  methods: {
    getPost () {
      this.post = this.$store.getters.getPostById(parseInt(this.$props.postId))[0]
    },
    filterComments () {
      this.comments = this.$store.getters.getCommentsById(parseInt(this.$props.postId))
    },
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped="true">
section {
  max-width: 1000px;
  margin: 0 auto;
}

.post__detail {
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;

  &__title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
}

.section__title {
  display: block;
  font-size: 1.15rem;
  font-weight: 600;
  margin: 30px 0;
  border-bottom: 1px solid #7c7c7c;
}

.comment + .comment {
  margin-top: 10px;
}

.btn-container {
  display: flex;
  justify-content: flex-end;

  .button {
    padding: 10px 50px;
    margin-top: 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    background-color: #854cf0;
    color: #FFF;
    font-size: 1rem;
  }
}

</style>
