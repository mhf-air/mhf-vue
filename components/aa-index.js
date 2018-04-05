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

// component list
import V from "./v.vue"
import H from "./h.vue"

export {
  V,
  H,
}

const components = [
  V,
  H,
]
