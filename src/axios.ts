// Axios 配置
import axios from 'axios' // 引入 axios
import { getToken } from '~/composables/auth' // 引入 auth
import { toast } from '~/composables/utils' // 引入 utils
// 创建 axios 实例，并设置基础 URL 和超时时间
const service = axios.create({
    baseURL: '/api', 
    timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        // 在请求头中添加 token
        const token = getToken()
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        // 返回响应数据
        return response.data
    },
    function (error) {
        // 登录失败，提示信息
        toast('请求失败', error.response.data.message, 'error')
        return Promise.reject(error)
    }
)

export default service