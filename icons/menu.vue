<template lang="pug">
  IconBase(
      iconName="menu"

      :width="width"
      :height="height"

      :fill="fill"
      :fill-opacity="fillOpacity"

      :stroke="stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLinecap"
      :stroke-linejoin="strokeLinejoin"
      :stroke-opacity="strokeOpacity"
      )
    line(x1="10" y1="30" x2="90" y2="30")
    line(x1="10" y1="50" x2="90" y2="50")
    line(x1="10" y1="70" x2="90" y2="70")
</template>

<script>
import IconBase from "./aa-icon-base.vue"

export default {
  name: "icon-menu",
  props: {
    ...IconBase.props,
  },
}
</script>

<style lang="stylus" scoped>
</style>
