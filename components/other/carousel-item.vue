<template lang="pug">
div.root.g-absolute
  slot
</template>

<script>
export default {
  name: "g-carousel-item",
  props: {
    theme: {
      type: String,
      default: "light", // light, dark
    }
  },
  data() {
    return {
    }
  },
  computed: {
    pageCount() {
    },
  },
  methods: {
    click(){
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
