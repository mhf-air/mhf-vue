<template lang="pug">
svg(
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    :width="width"
    :height="height"
    )
  //- title(:id="iconName") {{ iconName }} icon

  g(
      :fill="fill"
      :fill-opacity="fillOpacity"

      :stroke="stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLinecap"
      :stroke-linejoin="strokeLinejoin"
      :stroke-opacity="strokeOpacity"
      )
    slot
</template>

<script>
export default {
  name: "IconBase",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },

    fill: {
      type: String,
      default: "transparent",
    },
    fillOpacity: {
      type: [Number, String],
      default: 1,
    },

    stroke: {
      type: String,
      default: "currentColor",
    },
    strokeWidth: {
      type: [Number, String],
      default: "5",
    },
    strokeLinecap: {
      type: String,
      default: "butt", // butt, square, round
    },
    strokeLinejoin: {
      type: String,
      default: "miter", // miter, round, bevel
    },
    strokeOpacity: {
      type: [Number, String],
      default: 1,
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
