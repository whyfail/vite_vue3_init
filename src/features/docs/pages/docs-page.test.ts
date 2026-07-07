import { mount } from "@vue/test-utils";
import DocsPage from "./DocsPage.vue";

describe("DocsPage", () => {
  it("renders template documentation sections", () => {
    const wrapper = mount(DocsPage);

    expect(wrapper.text()).toContain("项目开发文档");
    expect(wrapper.text()).toContain("Vue Template Guide");
    expect(wrapper.text()).toContain("推荐开发流程");
  });
});
