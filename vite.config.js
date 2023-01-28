import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import progress from 'vite-plugin-progress';
import Inspector from 'vite-plugin-vue-inspector';
import postCssPxToRem from 'postcss-pxtorem';
import vitePluginNoBug from 'vite-plugin-no-bug';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import ElementPlus from 'unplugin-element-plus/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    Inspector({
      toggleComboKey: 'control-y',
    }),
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
    progress(),
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
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
        },
      },
    },
  },
});
