import fs from 'node:fs';
import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import postCssPxToRem from 'postcss-pxtorem';
import { visualizer } from 'rollup-plugin-visualizer';
import UnoCSS from 'unocss/vite';
import AutoDecimal from 'unplugin-auto-decimal/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import Printer from 'unplugin-printer/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import eslint from 'vite-plugin-eslint';
import vitePluginNoBug from 'vite-plugin-no-bug';

// https://vitejs.dev/config/
export default defineConfig(() => {
  // 这里只加入了element的有其他的也加在这里
  const optimizeDepsElementPlusIncludes = ['element-plus/es'];

  //  预加载element样式 有其他组件也是如此设置即可
  fs.readdirSync('node_modules/element-plus/es/components').forEach((dirname) => {
    fs.access(
      // 其他框架这个路径根据控制台输出进行修改 有的项目时加载的是 css.mjs 有些是 index.mjs 这个路径vite控制台能够看出来
      `node_modules/element-plus/es/components/${dirname}/style/index.mjs`,
      (err) => {
        if (!err) {
          optimizeDepsElementPlusIncludes.push(`element-plus/es/components/${dirname}/style/index`);
        }
      },
    );
  });

  return {
    base: './',
    plugins: [
      AutoDecimal(),
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
      eslint({
        cache: true,
        fix: true,
        failOnError: false,
      }),
      vitePluginNoBug(),
      ElementPlus({
        useSource: true,
      }),
      visualizer({ gzipSize: true }),
      Printer({
        info: [
          ({ lightCyan, green, bold }) => {
            return `  ${green('➜')}  ${bold('官网')}:  ${lightCyan('https://whyfail.github.io/cwa-docs')}`;
          },
        ],
      }),
      codeInspectorPlugin({
        bundler: 'vite',
      }),
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
          rewrite: path => path.replace(/^\/API_BASE/, ''),
        },
      },
    },
    optimizeDeps: {
      include: optimizeDepsElementPlusIncludes,
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
            vueHooksPlus: ['vue-hooks-plus'],
            lodashEs: ['lodash-es'],
            elementPlus: ['element-plus'],
          },
        },
      },
    },
  };
});
