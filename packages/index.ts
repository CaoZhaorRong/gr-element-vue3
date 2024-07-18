export * from './components'
import '/packages/style.css'
import * as components from './components'

const Plugins = {
  install(app) {
    // 配置此应用
    for (const key in components) {
      components[key].install(app)
    }
  }
}
export default Plugins
