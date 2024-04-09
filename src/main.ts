import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import regToast from './plugins/toast/index'
import regToast2 from './plugins/toast2/index'

import 'animate.css'

import dirs from '@/directives/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(regToast)
app.use(regToast2)

app.use(dirs, { name: 'zxx' })

app.mount('#app')
