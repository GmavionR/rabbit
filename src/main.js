import '@/styles/common.scss'

import { createApp } from 'vue'
//vuex
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
//
app.use(createPinia())
app.use(router)

app.mount('#app')

//注册全局指令
import { lazyPlugin } from '@/directives/index.js'
app.use(lazyPlugin)
  
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

