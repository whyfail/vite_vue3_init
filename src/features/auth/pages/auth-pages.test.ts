import { flushPromises, mount } from "@vue/test-utils";
import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "./LoginPage.vue";
import LoginPrism from "./LoginPrism.vue";

function mountLoginPage() {
  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: "/", redirect: "/login" },
      { path: "/login", component: LoginPage },
      { path: "/docs", component: { template: "<div>Docs route</div>" } },
    ],
  });

  return mount(LoginPage, {
    global: {
      plugins: [router],
    },
  });
}

describe("auth pages", () => {
  it("renders login form defaults", () => {
    const wrapper = mountLoginPage();
    const inputs = wrapper.findAll("input");

    expect(inputs[0].element.value).toBe("admin");
    expect(inputs[1].element.value).toBe("admin");
    expect(wrapper.text()).toContain("登录");
  });

  it("keeps token empty for invalid empty submit", async () => {
    const wrapper = mountLoginPage();
    const inputs = wrapper.findAll("input");

    await inputs[0].setValue("");
    await inputs[1].setValue("");
    await wrapper.find("form").trigger("submit.prevent");

    expect(sessionStorage.getItem("xxx_web_app_token")).toBeNull();
  });

  it("stores token after successful login", async () => {
    const wrapper = mountLoginPage();

    await wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    expect(sessionStorage.getItem("xxx_web_app_token")).toBe("123");
  });

  it("renders prism background container", () => {
    const wrapper = mount(LoginPrism);

    expect(wrapper.find(".absolute.inset-0").exists()).toBe(true);
  });
});
