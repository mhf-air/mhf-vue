<template lang="pug">
div.g-relative(@click="toggle" :style="styleTrack")
  div.g-absolute(v-show="isOn" :style="styleThumb")
  div.g-absolute(v-show="!isOn" :style="styleThumb")
</template>

<script>
let light = {
  thumb: {
    on: "#009688",
    off: "#fafafa",
    disabled: "#bdbdbd",
  },
  track: {
    on: "#00968880",
    off: "#00000061",
    disabled: "#0000001e",
  },
}

let dark = {
  thumb: {
    on: "#80cbc4",
    off: "#bdbdbd",
    disabled: "#424242",
  },
  track: {
    on: "#80cbc480",
    off: "#ffffff4d",
    disabled: "#ffffff1a",
  },
}

export default {
  name: "g-switch",
  props: {
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 20,
    },
    isOn: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "light", // light, dark
    }
  },
  computed: {
    styleTrack() {
      let result = {
        width: this.width + "px",
        height: this.height + "px",
        borderRadius: `${this.height/2}px / 50%`,
      }

      if (this.theme === "light") {
        if (this.isDisabled) {
          result.backgroundColor = light.track.disabled
        } else if (this.isOn) {
          result.backgroundColor = light.track.on
        } else {
          result.backgroundColor = light.track.off
        }
      } else {
        if (this.isDisabled) {
          result.backgroundColor = dark.track.disabled
        } else if (this.isOn) {
          result.backgroundColor = dark.track.on
        } else {
          result.backgroundColor = dark.track.off
        }
      }
      return result
    },
    styleThumb() {
      let w = this.width / 2
      let top = this.width / 4 - this.height / 2
      let result = {
        top: `-${top}px`,
        bottom: `-${top}px`,
        width: `${w}px`,
        borderRadius: "50%",
        boxShadow: "0px 1px 5px",
      }

      if (this.isOn) {
        result.right = 0
      } else {
        result.left = 0
      }

      if (this.theme === "light") {
        if (this.isDisabled) {
          result.backgroundColor = light.thumb.disabled
        } else if (this.isOn) {
          result.backgroundColor = light.thumb.on
        } else {
          result.backgroundColor = light.thumb.off
        }
      } else {
        if (this.isDisabled) {
          result.backgroundColor = dark.thumb.disabled
        } else if (this.isOn) {
          result.backgroundColor = dark.thumb.on
        } else {
          result.backgroundColor = dark.thumb.off
        }
      }
      return result
    },
  },
  methods: {
    toggle(){
      if (!this.isDisabled) {
        this.isOn = !this.isOn
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
