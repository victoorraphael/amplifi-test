<template>
  <div class="comment">
    <p class="comment__email">{{ comment.email }}</p>
    <small class="comment__name">{{ comment.name | capitalize }}</small>
    <p>{{ comment.body | capitalize }}</p>
  </div>
</template>

<script>
import string from '@/mixins/string'

export default {
  name: 'CommentItem',
  mixins: [string],
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped="true">
.comment {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  &__email {
    font-weight: 600;
    color: #4795E5;
  }

  &__name {
    display: block;
    margin-bottom: 10px;
  }
}
</style>
