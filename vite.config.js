import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import UnoCSS from 'unocss/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import Printer from 'unplugin-printer/vite';
import { defineConfig } from 'vite';
import { analyzer, unstableRolldownAdapter } from 'vite-bundle-analyzer';
import { compression } from 'vite-plugin-compression2';
import vitePluginNoBug from 'vite-plugin-no-bug';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      unstableRolldownAdapter(analyzer({
        openAnalyzer: false, // 避免每次构建自动打开
        analyzerMode: 'server', // 按需开启
      })),
      compression({
        algorithms: ['gzip', 'brotliCompress'], // 压缩算法 nginx需增相应配置
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
          autoprefixer({
            grid: true,
            overrideBrowserslist: ['> 1%'],
          }),
        ].filter(Boolean),
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
    build: {
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1500,
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              // Vue 核心库
              { name: 'vue-vendor', test: /node_modules\/(?:vue-router|pinia)/ },
              // Element Plus 主库
              { name: 'element-plus', test: /node_modules\/element-plus/ },
              // Element Plus 图标
              { name: 'element-icons', test: /node_modules\/@element-plus\/icons-vue/ },
              // 工具库集合
              { name: 'utils', test: /node_modules\/(lodash-es|dayjs|axios)/ },
              // 动画和特效库
              { name: 'animations', test: /node_modules\/(animate\.css|@zumer\/snapdom)/ },
              // Vue Hooks 增强
              { name: 'vue-hooks-plus', test: /node_modules\/vue-hooks-plus/ },
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
