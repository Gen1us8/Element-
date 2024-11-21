// 引入必要模块
// 引入vue  
import { createApp } from 'vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入App.vue
import App from './App.vue'
// 引入router
import router from './router'
// 引入tailwindcss
import './styles/main.css'

// 创建vue实例
const app = createApp(App)

// 使用router
app.use(router)

// 使用element-plus
app.use(ElementPlus)

// 引入element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 挂载实例
app.mount('#app')
