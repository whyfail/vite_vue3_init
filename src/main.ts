import { createApp } from "vue";
import App from "./app/App.vue";
import { setupApp } from "./app/setup";
import "./app/styles/index.css";

const app = createApp(App);

setupApp(app);

// API Mock（MSW）：仅在显式设置 VITE_ENABLE_MOCK=true 时启用。
// 条件写成静态字面量以便构建期剔除 mock 代码，生产默认走真实后端。
async function bootstrap() {
  if (import.meta.env.VITE_ENABLE_MOCK === "true") {
    const { enableApiMock } = await import("./shared/api/mock/worker");

    await enableApiMock();
  }

  app.mount("#app");
}

bootstrap().catch((error: unknown) => {
  console.error("应用初始化失败", error);
});
