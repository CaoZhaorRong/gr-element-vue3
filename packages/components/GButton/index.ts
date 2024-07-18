import button from './src/index.vue'
export * from './src/index.vue'

const GButton = {
  install: (app) => {
    app.component('GButton', button)
  }
}
export default GButton
