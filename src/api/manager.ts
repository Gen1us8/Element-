// API 管理模块

import axios from '~/axios' // 引入 axios 和基础 URL

// 登录
export function login(username: string, password: string) {
    return axios.post('/login', {
        username,
        password
    })
}

export function getInfo() {
    // 获取用户信息，这里暂时返回一个假数据
    // return axios.get('/info')
    return 'Genius8'
}