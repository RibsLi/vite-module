import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

// 全局样式
import '@/assets/css/index.styl'

import 'uno.css'

// 状态管理
import { createPinia } from 'pinia'
import { useStore } from '@/store'

// 网络请求
import { api } from '@/api/index.js'

const app = createApp(App)
app.use(createPinia())
// app.use(router)
app.config.globalProperties.$api = api
app.config.globalProperties.$store = reactive(useStore())
app.mount('#app')
