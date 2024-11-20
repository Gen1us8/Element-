// 引入vue-router
import {
    createRouter, // 创建路由
    createWebHashHistory, // 创建hash路由
    RouteRecordRaw // 路由配置
} from 'vue-router' 

// 引入页面
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
// 定义路由
const routes: RouteRecordRaw[] = [{
    path: '/',
    component: Index,
}, {
    path: '/about',
    component: About,
}, {
    path: '/login',
    component: Login,
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 导出路由
export default router
