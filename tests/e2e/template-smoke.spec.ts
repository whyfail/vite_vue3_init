import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.exposeFunction("getConsoleErrors", () => consoleErrors);
});

test("renders docs from the public home route", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "项目开发文档" })).toBeVisible();
});

test("logs in and returns to docs", async ({ page }) => {
  await page.goto("/#/login");
  await page.getByRole("button", { name: "登录" }).click();

  await expect(page).toHaveURL(/#\/docs$/);
  await expect(page.getByRole("heading", { name: "项目开发文档" })).toBeVisible();
});

test("renders 404 fallback route", async ({ page }) => {
  await page.goto("/#/not-found-smoke-test");

  await expect(page.getByText("页面不存在")).toBeVisible();
});

test.afterEach(async ({ page }) => {
  const errors = await page.evaluate(async () =>
    (
      window as unknown as {
        getConsoleErrors: () => Promise<string[]>;
      }
    ).getConsoleErrors(),
  );

  expect(errors).toEqual([]);
});
