// 登录相关逻辑

import { useCookies } from '@vueuse/integrations/useCookies'
const Tokenkey = 'token'
const Levelkey = 'level'
const cookies = useCookies()

// 获取 Token
export function getToken() {
    return cookies.get(Tokenkey)
}

// 获取 Level
export function getLevel() {
    return cookies.get(Levelkey)
}

// 设置 Token
export function setToken(token: string) {
    return cookies.set(Tokenkey, token)
}

// 设置 Level
export function setLevel(level: string) {
    return cookies.set(Levelkey, level)
}
