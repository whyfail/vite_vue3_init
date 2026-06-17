import type { RouteRecordRaw } from "vue-router";

export interface RouteMeta {
  title?: string;
  needLogin?: boolean;
}

export type AppRouteRecordRaw = RouteRecordRaw & {
  meta?: RouteMeta;
  children?: AppRouteRecordRaw[];
};
