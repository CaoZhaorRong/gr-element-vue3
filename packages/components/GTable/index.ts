import table from './src/index.vue'
const GTable = {
  install: (app) => {
    app.component('GTable', table)
  }
}
export * from './src/index.vue'
export default GTable
