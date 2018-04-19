<template lang="pug">
div
  slot
</template>

<script>
export default {
  name: "g-radio-group",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
