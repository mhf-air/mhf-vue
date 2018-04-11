<template lang="pug">
svg(
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    :width="width"
    :height="height"
    )
  title(:id="iconName") {{ iconName }} icon
  g(:fill="fill" :stroke="stroke")
    slot
</template>

<script>
export default {
  name: "IconBase",
  props: {
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
    iconName: {
      type: String,
      default: "",
    },
    fill: {
      type: String,
      default: "transparent",
    },
    stroke: {
      type: String,
      default: "currentColor",
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
