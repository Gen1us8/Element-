// 工具函数

import { getLevel } from '~/composables/auth' // 引入权限获取函数
import { ElNotification } from 'element-plus' // 引入element-plus通知

// 判断是否为管理员
export function isAdmin() {
    return getLevel() === '0'
}

// 信息提示
export function toast(title: string, message: string, type: 'success' | 'warning' | 'info' | 'error', dangerouslyUseHTMLString: boolean = false) {
    ElNotification({
        title,
        message,
        type,
        dangerouslyUseHTMLString,
    })
}