export default {
  filters: {
    capitalize (value) {
      return value[0].toUpperCase() + value.slice(1)
    },
    preview (value) {
      return value.slice(0, 30) + '...'
    }
  }
}
