<template lang="pug">
label.label
  | {{ isFrontLabel ? label : "" }}
  input.input(
      type="radio"
      v-bind="$attrs"
      :style="inputStyle"
      :name="name"
      )
  | {{ isFrontLabel ? "" : label }}
</template>

<script>
// usage: use font-size to change size

export default {
  name: "g-radio",
  props: {
    label: {
      type: String,
      default: "",
    },
    isFrontLabel: {
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
    },
  },
  data() {
    return {
      name: ""
    }
  },
  computed: {
    inputStyle() {
      let result = {
      }

      if (this.isFrontLabel) {
        result.marginLeft = "0.3em"
      } else {
        result.marginRight = "0.3em"
      }

      return result
    },
  },
  created() {
    this.name = this.$parent.name
  },
}
</script>

<style lang="stylus" scoped>
.input
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  vertical-align: middle
  position: relative

  border-radius: 50%
  width: 1em
  height: 1em
  border: 0.1em solid #616161
  transition: 200ms all linear
  outline: none

.input:checked
  border-color: #009688

.input::after
  content: ""
  position: absolute
  border-radius: 50%
  width: 50%
  height: 50%
  background: #009688
  top: 50%
  transform: translateY(-50%) 
  left: 0
  right: 0
  margin-left: auto
  margin-right: auto
  visibility: hidden

.input:checked::after
  visibility: visible

</style>
