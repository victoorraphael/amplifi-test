<template>
  <div class="post">
    <p class="post__title">{{ post.title | capitalize }}</p>
    <small>{{ post.body | preview }}</small>
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
}
</style>
