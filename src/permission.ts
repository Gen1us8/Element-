// 全局守卫系统

import router from "~/router" //
import { getToken } from "~/composables/auth"
import { toast } from "./composables/utils"

// 全局前置守卫
router.beforeEach((to,from,next)=>{

    const token = getToken()

    // 未登录用户，跳转到登录页
    if(!token && to.path !="/login"){
        toast("无法访问","请先登录后访问",'error')
        return next({ path:"/login"})
    }

    // 已登录用户，不能重复登录
    if(token && to.path == "/login"){
        toast("请勿重复登录","请退出登录后再访问登录页",'error')
        return next({ path:from.path })
    }
    next()
})
