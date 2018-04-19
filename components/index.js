// global components

function install(Vue) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}

export function use(Vue, componentList) {
  componentList.map((c) => {
    Vue.component(c.name, c)
  })
}

// basic
import V from "./basic/v.vue"
import H from "./basic/h.vue"

// data

// form
import Switch from "./form/switch.vue"
import RadioGroup from "./form/radio-group.vue"
import Radio from "./form/radio.vue"

// navigation

// notice

// other
import Carousel from "./other/carousel.vue"
import CarouselItem from "./other/carousel-item.vue"

export {
  V,
  H,

  Switch,
  RadioGroup,
  Radio,

  Carousel,
  CarouselItem,
}

const components = [
  V,
  H,

  Switch,
  RadioGroup,
  Radio,

  Carousel,
  CarouselItem,
]
