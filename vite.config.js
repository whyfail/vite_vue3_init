import ElementPlus from 'unplugin-element-plus/vite';
import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';
import { visualizer } from 'rollup-plugin-visualizer';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import vitePluginNoBug from 'vite-plugin-no-bug';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    viteCompression({
      algorithm: 'gzip',
      verbose: false,
      filter: /\.(js)$/,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    UnoCSS({
      configFile: './unocss.config.js',
    }),
    vitePluginNoBug(),
    ElementPlus({
      useSource: true,
    }),
    visualizer(),
    VueDevTools(),
    webUpdateNotice({
      notificationProps: {
        title: '系统升级通知',
        description: '检测到当前系统版本已更新，请刷新页面后使用',
        buttonText: '刷新',
        dismissButtonText: '忽略',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['#app'],
        }),
        autoprefixer({
          grid: true,
          overrideBrowserslist: ['> 1%'],
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/element-plus.scss" as *;`,
      },
    },
  },
  server: {
    host: true,
    open: true,
    proxy: {
      // 代理
      '/API_BASE': {
        // !测试接口，新建项目后删除 https://api.uomg.com/doc-rand.qinghua.html
        target: 'https://api.uomg.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/API_BASE/, ''),
      },
    },
  },
  esbuild: {
    drop: ['debugger', 'console'],
  },
  build: {
    chunkSizeWarningLimit: 1500,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 1000,
        manualChunks: {
          vue: ['vue'],
          vueuse: ['@vueuse/core'],
          lodashEs: ['lodash-es'],
          elementPlus: ['element-plus'],
          vueQuery: ['@tanstack/vue-query'],
        },
      },
    },
  },
});
