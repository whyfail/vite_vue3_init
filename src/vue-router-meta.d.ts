import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    needLogin?: boolean
    transitionName?: string
  }
}
