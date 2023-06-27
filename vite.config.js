import ElementPlus from 'unplugin-element-plus/vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { ViteCodeInspectorPlugin } from 'vite-code-inspector-plugin';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteCompression from 'vite-plugin-compression';
import vitePluginNoBug from 'vite-plugin-no-bug';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    ViteCodeInspectorPlugin(),
    viteCompression({
      algorithm: 'gzip',
      verbose: false,
      filter: /\.(js)$/,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    vitePluginNoBug(),
    chunkSplitPlugin(),
    ElementPlus({
      useSource: true,
    }),
    visualizer(),
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
    // host: true,

    proxy: {
      // 代理
      '/PROXY': {
        // !测试接口，新建项目后删除
        target: 'https://v.api.aa1.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/PROXY/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          vueuse: ['@vueuse/core'],
          lodashEs: ['lodash-es'],
          elementPlus: ['element-plus'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
