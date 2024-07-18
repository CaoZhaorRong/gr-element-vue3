import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import grElement from '../dist/gr-element.es'

const app = createApp(App)

app.use(ElementPlus)
app.use(grElement)
app.mount('#app')
