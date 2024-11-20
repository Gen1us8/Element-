<template>
    <div>
        <el-result
            icon="error"
            title="404 Not Found"
            sub-title="你访问的页面不存在QAQ"
        >
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
            </template>
        </el-result>
    </div>
</template>
