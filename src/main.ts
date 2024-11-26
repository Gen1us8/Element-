// 主文件

import { createApp } from 'vue' // 引入vue
import ElementPlus from 'element-plus' // 引入element-plus  
import 'element-plus/dist/index.css' // 引入element-plus样式
import App from './App.vue' // 引入App.vue
import router from './router' // 引入router
import store from './store'  // 引入store
import './styles/main.css' // 引入tailwindcss

// 创建vue实例
const app = createApp(App)

app.use(router) // 使用router
app.use(store) // 使用store
app.use(ElementPlus) // 使用element-plus

// 引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 引入全局守卫
import './permission'

// 挂载实例
app.mount('#app')
