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
import IconBase from "./aa-icon-base.vue"
import IconMenu from "./menu.vue"
import IconSearch from "./search.vue"
import IconSquareBracket from "./square-bracket.vue"

export {
  IconBase,
  IconMenu,
  IconSearch,
  IconSquareBracket,
}

const components = [
  IconBase,
  IconMenu,
  IconSearch,
  IconSquareBracket,
]
