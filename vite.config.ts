import process from "node:process";
import { webUpdateNotice } from "@plugin-web-update-notification/vite";
import tailwindcss from "@tailwindcss/vite";
import { DevTools } from "@vitejs/devtools";
import { DevToolsSelfInspect } from "@vitejs/devtools-self-inspect";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoprefixer from "autoprefixer";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { defineConfig, loadEnv } from "vite";
import { compression } from "vite-plugin-compression2";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isTest = mode === "test";
  const apiBase = env.VITE_API_BASE || "/API_BASE";
  const apiTarget = env.VITE_API_TARGET || "http://xxxx";

  return {
    base: "./",
    plugins: [
      !isTest && env.VITE_ENABLE_DEVTOOLS === "true" && DevTools(),
      !isTest && env.VITE_ENABLE_DEVTOOLS === "true" && DevToolsSelfInspect(),
      !isTest && env.VITE_ENABLE_VUE_DEVTOOLS === "true" && vueDevTools(),
      vue(),
      vueJsx(),
      !isTest &&
        env.VITE_ENABLE_COMPRESSION === "true" &&
        compression({
          algorithms: ["gzip", "brotliCompress"], // 压缩算法 nginx需增相应配置
        }),
      !isTest &&
        env.VITE_ENABLE_LEGACY === "true" &&
        legacy({
          targets: ["defaults", "not IE 11"],
        }),
      tailwindcss(),
      !isTest &&
        env.VITE_ENABLE_CODE_INSPECTOR === "true" &&
        codeInspectorPlugin({
          bundler: "vite",
        }),
      !isTest &&
        env.VITE_ENABLE_WEB_UPDATE_NOTICE === "true" &&
        webUpdateNotice({
          notificationProps: {
            title: "系统升级通知",
            description: "检测到当前系统版本已更新，请刷新页面后使用",
            buttonText: "刷新",
            dismissButtonText: "忽略",
          },
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["> 1%"],
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
          rewrite: (path) => path.replace(new RegExp(`^${apiBase}`), ""),
        },
      },
    },
    build: {
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1500,
      rolldownOptions: {
        checks: {
          invalidAnnotation: false,
          pluginTimings: false,
        },
        output: {
          codeSplitting: {
            groups: [
              // Vue 核心库
              { name: "vue-vendor", test: /node_modules\/(?:vue-router|pinia)/ },
              // HTTP 基础库
              { name: "http-vendor", test: /node_modules\/axios/ },
              // UI 基础库
              {
                name: "ui-vendor",
                test: /node_modules\/(reka-ui|vue-sonner|@heroicons\/vue|@lucide\/vue)/,
              },
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
    test: {
      coverage: {
        all: true,
        exclude: [
          "src/main.ts",
          "src/vite-env.d.ts",
          "src/shims-vue.d.ts",
          "src/vue-router-meta.d.ts",
          "**/*.test.*",
          "src/test/**",
        ],
        provider: "v8",
        reporter: ["text", "html", "lcov"],
        thresholds: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
      css: true,
      environment: "jsdom",
      globals: true,
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      outputFile: {
        junit: "test-results/vitest-junit.xml",
      },
      reporters: ["default"],
      setupFiles: "./src/test/setup.ts",
    },
  };
});
