<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" :sm="8" class="login-banner">
            <div class="login-banner-text">
                欢迎使用世界上最好的信息管理系统！
            </div>
        </el-col>
        <el-col :lg="8" :md="12" :sm="8" class="login-form-container">
            <h2 class="login-title">欢迎回来</h2>
            <div class="login-divider-container">
                <span class="login-divider-line"></span>
                <span>登录</span>
                <span class="login-divider-line"></span>
            </div>
            <el-form :model="form"
            label-width="auto"
            style="max-width: 600px"
            class="login-form">
                <el-form-item class="login-input">
                    <el-input v-model="form.username" placeholder="用户名">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="login-input">
                    <el-input v-model="form.password" placeholder="密码">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button
                        round 
                        type="primary" 
                        class="login-button"
                        color="#f9a8d4">
                        LinkStart!
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script setup>
import { reactive } from 'vue'
const form = reactive({
    name: '',
})
</script>

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

.login-input {
    @apply w-[250px];
}

.login-button {
    @apply w-[100px] text-white mt-4;
}
</style>