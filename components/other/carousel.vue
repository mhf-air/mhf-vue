<template lang="pug">
div.root.relative(
      @mouseenter="clearTimer"
      @mouseleave="addTimer"
      )
  slot
  icon-angle-bracket.angle.angle-left.absolute(
      direction="left" width="20"
      @click.native="prev"
      )
  icon-angle-bracket.angle.angle-right.absolute(
      direction="right" width="20"
      @click.native="next"
      )
  g-h.indicator-group.absolute(j-c="center")
    div.indicator(
        v-for="n in pageCount"
        :key="n"
        :class="{'is-current-item': curIndicatorIndex === n}"
        v-on=`triggerMethod === "click" ? {
              click: $event => selectIndicator($event, n),
            } : {
              mouseenter: $event => selectIndicator($event, n),
            }
            `
        )
</template>

<script>
export default {
  name: "g-carousel",
  props: {
    triggerMethod: {
      type: String,
      default: "hover", // hover, click
    },
    isAutoSwitch: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      curIndicatorIndex: 0,
      autoSwitchTimer: null,
    }
  },
  computed: {
    pageCount() {
      return this.$slots.default.length
    },
  },
  watch: {
    curIndicatorIndex() {
      this.$slots.default.map((item, i) => {
        item.elm.style.left = `${(i + 1 - this.curIndicatorIndex) * 100}%`
        item.elm.style.right = `${(i + 1 - this.curIndicatorIndex) * 100}%`
        item.elm.style.transition = "all 200ms"
      })
    },
  },
  methods: {
    selectIndicator(e, n) {
      this.curIndicatorIndex = n
    },
    prev() {
      if (this.curIndicatorIndex == 1) {
        this.curIndicatorIndex = this.pageCount
      } else {
        this.curIndicatorIndex--
      }
    },
    next() {
      if (this.curIndicatorIndex == this.pageCount) {
        this.curIndicatorIndex = 1
      } else {
        this.curIndicatorIndex++
      }
    },
    addTimer() {
      if (this.isAutoSwitch && this.autoSwitchTimer === null){
        this.autoSwitchTimer = window.setInterval(this.next, 3200)
      }
    },
    clearTimer() {
      if (this.autoSwitchTimer !== null) {
        window.clearInterval(this.autoSwitchTimer)
        this.autoSwitchTimer = null
      }
    },
  },
  created() {
    this.curIndicatorIndex = 1
    if (this.isAutoSwitch){
      this.autoSwitchTimer = window.setInterval(this.next, 3200)
    }
  },
}
</script>

<style lang="stylus" scoped>
.relative
  position: relative

.absolute
  position: absolute

.root
  overflow: hidden
  &:hover .angle
    visibility: visible

.angle
  top: 50%
  transform: translateY(-50%) 
  color: silver
  z-index: 3
  visibility: hidden
  &:hover
    color: black

  &-left
    left: 5px
  &-right
    right: 5px

.indicator-group
  bottom: 20px
  left: 0
  right: 0
  z-index: 3

.indicator
  width: 10px
  height: 10px
  background: silver
  margin: 3px
  border-radius: 50%

.is-current-item
  background: white
</style>
