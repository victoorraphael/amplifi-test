export default {
  filters: {
    capitalize (value) {
      return value[0].toUpperCase() + value.slice(1)
    }
  }
}