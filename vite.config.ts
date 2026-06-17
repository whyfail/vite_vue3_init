import process from 'node:process';
import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import tailwindcss from '@tailwindcss/vite';
import { DevTools } from '@vitejs/devtools';
import { DevToolsSelfInspect } from '@vitejs/devtools-self-inspect';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import { defineConfig, loadEnv } from 'vite';
import { compression } from 'vite-plugin-compression2';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiBase = env.VITE_API_BASE || '/API_BASE';
  const apiTarget = env.VITE_API_TARGET || 'http://xxxx';

  return {
    base: './',
    plugins: [
      env.VITE_ENABLE_DEVTOOLS === 'true' && DevTools(),
      env.VITE_ENABLE_DEVTOOLS === 'true' && DevToolsSelfInspect(),
      env.VITE_ENABLE_VUE_DEVTOOLS === 'true' && vueDevTools(),
      vue(),
      vueJsx(),
      env.VITE_ENABLE_COMPRESSION === 'true' && compression({
        algorithms: ['gzip', 'brotliCompress'], // 压缩算法 nginx需增相应配置
      }),
      env.VITE_ENABLE_LEGACY === 'true' && legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      tailwindcss(),
      env.VITE_ENABLE_CODE_INSPECTOR === 'true' && codeInspectorPlugin({
        bundler: 'vite',
      }),
      env.VITE_ENABLE_WEB_UPDATE_NOTICE === 'true' && webUpdateNotice({
        notificationProps: {
          title: '系统升级通知',
          description: '检测到当前系统版本已更新，请刷新页面后使用',
          buttonText: '刷新',
          dismissButtonText: '忽略',
        },
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            grid: true,
            overrideBrowserslist: ['> 1%'],
          }),
        ].filter(Boolean),
      },
    },
    server: {
      host: true,
      open: true,
      proxy: {
        [apiBase]: {
          target: apiTarget,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${apiBase}`), ''),
        },
      },
    },
    build: {
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1500,
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              // Vue 核心库
              { name: 'vue-vendor', test: /node_modules\/(?:vue-router|pinia)/ },
              // HTTP 基础库
              { name: 'http-vendor', test: /node_modules\/axios/ },
              // UI 基础库
              { name: 'ui-vendor', test: /node_modules\/(reka-ui|vue-sonner|@heroicons\/vue|@lucide\/vue)/ },
            ],
          },
          minify: {
            compress: {
              dropConsole: true,
              dropDebugger: true,
            },
          },
        },
      },
    },
  };
});
