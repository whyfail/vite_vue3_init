/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;

  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_API_BASE?: string
  readonly VITE_API_TARGET?: string
  readonly VITE_ENABLE_VUE_DEVTOOLS?: string
  readonly VITE_ENABLE_DEVTOOLS?: string
  readonly VITE_ENABLE_CODE_INSPECTOR?: string
  readonly VITE_ENABLE_PERFORMANCE_MONITOR?: string
  readonly VITE_ENABLE_COMPRESSION?: string
  readonly VITE_ENABLE_LEGACY?: string
  readonly VITE_ENABLE_WEB_UPDATE_NOTICE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
