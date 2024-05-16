import '@/styles/common.scss'

import { createApp } from 'vue'
//vuex
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//
const app = createApp(App)

//
app.use(createPinia())
app.use(router)

app.mount('#app')
