<template>
  <div class="post">
    <p class="post__title">{{ post.title | capitalize }}</p>
    <small>{{ post.body | preview | capitalize }}</small>
    <div class="post__details">
      <a @click="$emit('click', post.id)">See comments...</a>
      <small>Comments ( {{ commentsSize }} )</small>
    </div>
  </div>
</template>

<script>
import string from '@/mixins/string'

export default {
  name: 'PostItem',
  mixins: [string],
  props: {
    post: {
      type: Object,
      required: true
    },
    commentsSize: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped="true">
.post {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  &__title {
    font-weight: 600;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    a,
    small {
      font-size: smaller;
      color: #9EA5AA;
    }

    a:hover {
      color: #4795E5;
    }
  }
}
</style>
