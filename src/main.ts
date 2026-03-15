import '@/assets/main.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lenis from "./plugins/lenis"

import ui from '@nuxt/ui/vue-plugin'

const app = createApp(App)
const pinia = createPinia()

app.use(lenis)
app.use(pinia)
app.use(router)

app.use(ui)

app.mount('#app')
