import { axe } from "jest-axe";
import DocsPage from "./DocsPage.vue";
import { mountWithRouter } from "@/test/mount";

describe("docs page accessibility", () => {
  it("has no obvious accessibility violations", async () => {
    const wrapper = mountWithRouter(DocsPage, {
      attachTo: document.body,
    });

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations();
  });
});
