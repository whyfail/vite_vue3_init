import { axe } from "jest-axe";
import LoginPage from "./LoginPage.vue";
import { mountWithRouter } from "@/test/mount";

describe("auth page accessibility", () => {
  it("has no obvious accessibility violations", async () => {
    const wrapper = mountWithRouter(LoginPage, {
      attachTo: document.body,
    });

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations();
  });
});
