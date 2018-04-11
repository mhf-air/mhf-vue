<template lang="pug">
  IconBase(iconName="menu" :width="width" :height="height" :fill="fill" :stroke="stroke")
    line(x1="10" y1="30" x2="90" y2="30" :stroke-width="strokeWidth")
    line(x1="10" y1="50" x2="90" y2="50" :stroke-width="strokeWidth")
    line(x1="10" y1="70" x2="90" y2="70" :stroke-width="strokeWidth")
</template>

<script>
import IconBase from "./aa-icon-base.vue"

export default {
  name: "icon-menu",
  props: {
    ...IconBase.props,
    strokeWidth: {
      type: [Number, String],
      default: 5,
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
