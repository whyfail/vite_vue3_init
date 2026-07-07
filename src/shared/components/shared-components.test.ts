import { defineComponent } from "vue";
import { mountWithRouter } from "@/test/mount";
import ErrorBoundary from "./ErrorBoundary.vue";
import Loading from "./Loading.vue";
import Router404 from "./Router404.vue";

describe("shared components", () => {
  it("renders loading state", () => {
    const wrapper = mountWithRouter(Loading);

    expect(wrapper.text()).toContain("加载中");
  });

  it("renders 404 page", () => {
    const wrapper = mountWithRouter(Router404);

    expect(wrapper.text()).toContain("404");
    expect(wrapper.text()).toContain("页面不存在");
  });

  it("renders default slot through error boundary", () => {
    const wrapper = mountWithRouter(ErrorBoundary, {
      slots: {
        default: "<div>Healthy child</div>",
      },
    });

    expect(wrapper.text()).toContain("Healthy child");
  });

  it("renders fallback when a child throws", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const ThrowingChild = defineComponent({
      setup() {
        throw new Error("Boom");
      },
      template: "<div />",
    });

    const wrapper = mountWithRouter(ErrorBoundary, {
      slots: {
        default: ThrowingChild,
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("页面出错了");
    errorSpy.mockRestore();
  });
});
