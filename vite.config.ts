// vite配置文件

import { defineConfig } from 'vite' // 引入vite配置
import vue from '@vitejs/plugin-vue' // 引入vue插件

import path from 'path' // 引入路径

// 导出vite配置
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, "src"), // 设置src文件夹别名
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://mis.wooow.finance/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  plugins: [vue()], // 使用vue插件
})
