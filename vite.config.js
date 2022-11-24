import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import progress from 'vite-plugin-progress';
import Inspector from 'vite-plugin-vue-inspector';
import postCssPxToRem from 'postcss-pxtorem';
import vitePluginNoBug from 'vite-plugin-no-bug';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Inspector({
      toggleComboKey: 'control-y',
    }),
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
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
    progress(),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 主题修改
          '@primary-color': '#1d88f6', // 全局主色
        },
      },
    },
  },
  server: {
    host: 'localhost',
    proxy: {
      // 代理
      '/PROXY': {
        target: 'http://xxxx',
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
          lodash: ['lodash'],
          moment: ['moment'],
        },
      },
    },
  },
});
