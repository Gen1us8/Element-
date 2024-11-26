// 登录页面

// 模板代码
<template>
    <el-row class="login-container">
        <!-- 左侧背景 -->
        <el-col :lg="16" :md="12" :sm="8">
            <div>
                欢迎使用世界上最好的信息管理系统！
            </div>
        </el-col>
        <!-- 右侧登录表单 -->
        <el-col :lg="8" :md="12" :sm="8">
            <!-- 标题 -->
            <h2>欢迎回来</h2>
            <!-- 分割线 -->
            <div>
                <span></span>
                <span>登录</span>
                <span></span>
            </div>
            <!-- 登录表单 -->
            <el-form
                ref="loginFormRef"
                :rules="loginRules"
                :model="form"
                label-width="auto"
                class="login-form"
                style="max-width: 600px">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input
                        v-model="form.username"
                        placeholder="用户名"
                        @keyup.enter="handleEnterPress">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        show-password
                        v-model="form.password"
                        placeholder="密码"
                        style="width: 200px"
                        @keyup.enter="handleEnterPress">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item style="text-align: center">
                    <el-button
                        @click="handleLogin"
                        :loading="loading"
                        round
                        type="primary"
                        color="#f9a8d4"
                        class="login-button">
                        LinkStart!
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

// 使用 setup 语法糖进行逻辑编写
<script setup>
import { reactive, ref } from 'vue' // 引入vue
import  { useRouter } from 'vue-router' // 引入vue-router
import { login } from '~/api/manager'; // 引入登录api
import { setToken, setLevel } from '~/composables/auth' // 引入auth
import { toast } from '~/composables/utils' // 引入 utils
import { useStore } from 'vuex'; // 引入vuex

const router = useRouter() // 获取路由实例
const loading = ref(false) // 加载状态
const store = useStore() // 获取store实例

// 登录框输入规则
const loginRules = reactive({
    username: [{
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
    }],
    password: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur'
    }]
})
const loginFormRef = ref(null) // 登录表单实例

const handleLogin = () => {
    loading.value = true // 设置加载状态
    loginFormRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        login(form.username, form.password)
            // 登录成功，存储用户信息
            .then((res) => {
                console.log(res);

                // 存储用户 Token 和 Level
                setToken(res.token)
                setLevel(res.level)
                // 存储用户信息
                store.commit('SET_USER', res)

                // 登录成功，提示信息
                toast('登录成功', '欢迎回来，' + form.username, 'success')

                // 登录成功，跳转首页
                router.push('/')
            })
            .finally(() => {
                loading.value = false // 设置加载状态
            })
    })
}

const handleEnterPress = () => {
    // 如果用户名和密码不为空，则执行登录
    if (form.username && form.password) {
        handleLogin()
    }
}

const form = reactive({
    username: '',
    password: ''
})

</script>

// 样式代码
<style lang="postcss">

.login-container {
    @apply min-h-dvh;
}

.login-container > .el-col:first-child {
    @apply bg-pink-300 flex items-center justify-center;
}

.login-container > .el-col:first-child > div {
    @apply text-4xl font-bold text-white;
}

.login-container > .el-col:last-child {
    @apply flex flex-col bg-slate-50 items-center justify-center;
}

.login-container > .el-col:last-child > h2 {
    @apply text-2xl font-bold text-gray-800;
}

.login-container > .el-col:last-child > div:first-of-type {
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}

.login-container > .el-col:last-child > div:first-of-type > span:nth-child(odd) {
    @apply h-[1px] w-20 bg-gray-300;
}

.login-form {
    @apply flex flex-col items-center;
}

.login-form {
    @apply w-[250px];
}

.login-button {
    @apply w-[100px] text-white mt-4;
}
</style>