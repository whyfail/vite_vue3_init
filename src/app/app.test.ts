import { mount } from "@vue/test-utils";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import AppLayout from "./AppLayout.vue";

describe("app components", () => {
  it("renders layout router outlet", async () => {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: "/",
          component: AppLayout,
          children: [{ path: "docs", component: { template: "<div>Docs outlet</div>" } }],
        },
      ],
    });

    router.push("/docs");
    await router.isReady();

    const wrapper = mount(AppLayout, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain("Docs outlet");
  });

  it("renders app shell", async () => {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [{ path: "/", component: { template: "<div>Home view</div>" } }],
    });

    router.push("/");
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain("Home view");
  });
});
