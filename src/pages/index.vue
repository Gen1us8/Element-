<template>
    <div>
        后台首页
        <el-button @click="get">获取TokenCookie</el-button>
        {{ $store.state.user }}
    </div>
</template>

<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies()

const get = () => {
    console.log(cookies.get('token'));
}
</script>