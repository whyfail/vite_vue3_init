import type { Component } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";

function mountWithRouter(component: Component, options: Parameters<typeof mount>[1] = {}) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: "/", component },
      { path: "/docs", component: { template: "<div>Docs route</div>" } },
      { path: "/login", component: { template: "<div>Login route</div>" } },
    ],
  });

  return mount(component, {
    global: {
      plugins: [createPinia(), router],
      ...options.global,
    },
    ...options,
  });
}

export { mountWithRouter };
