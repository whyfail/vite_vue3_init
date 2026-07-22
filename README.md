# 为 AI 而生的 Vue 3 + Vite 企业级项目模板

一个专为 AI 协作编码设计的 Vue 3 企业级项目模板。模板通过 `AGENTS.md`、`app/features/shared` 分层、shadcn-vue 源码化组件和可验证工程脚本，把架构边界、开发约定和质量门禁明确写进项目本身，让 AI 和团队成员都能按同一套规则稳定扩展业务。

## 核心特性

- **应用分层**：`src/app` 负责应用组合，`src/features` 承载业务模块，`src/shared` 放跨业务基础能力。
- **AI 友好**：`AGENTS.md` 内置项目结构、依赖边界、验证命令和代码归属规则，减少 AI 误改和过度抽象。
- **UI 体系**：shadcn-vue + reka-ui + vue-sonner，组件源码位于 `src/shared/ui`。
- **样式方案**：Tailwind CSS v4，主题变量集中在 `src/app/styles/index.css`。
- **图标方案**：Heroicons Vue，和 React 模板保持同系列图标库。
- **路由管理**：Vue Router，feature 暴露 routes，由 `src/app/routes` 聚合。
- **网络请求**：Axios 统一封装在 `src/shared/api/http.ts`。
- **状态管理**：Pinia + persisted state，应用级注册位于 `src/app/stores`。
- **构建治理**：Vite 插件通过 `.env` 开关启用。

## 技术栈

| 类别     | 技术                          |
| -------- | ----------------------------- |
| 核心框架 | Vue 3.5.40 + TypeScript 6.0.3 |
| 构建工具 | Vite 8.1.5                    |
| UI 组件  | shadcn-vue + reka-ui          |
| 样式     | Tailwind CSS v4               |
| 图标     | Heroicons Vue + Lucide Vue    |
| 路由     | Vue Router 5.2                |
| 状态     | Pinia 4                       |
| 请求     | Axios 1.18.1                  |
| 通知     | vue-sonner                    |

包管理器基线：pnpm 11.10.0。

## 快速开始

```bash
pnpm install
pnpm dev
```

常用验证命令：

```bash
pnpm test
pnpm test:coverage
pnpm test:junit
pnpm test:component-coverage
pnpm test:e2e
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
pnpm typecheck
pnpm build
```

## 测试与质量门禁

模板内置 Vitest、Vue Test Utils、Testing Library、MSW、jest-axe 和 Playwright，覆盖单元测试、组件测试、无障碍测试、网络 mock 和 E2E 冒烟验证。

| 命令                           | 说明                                  |
| ------------------------------ | ------------------------------------- |
| `pnpm test`                    | 运行单元测试、组件测试和 a11y 测试    |
| `pnpm test:coverage`           | 运行覆盖率门禁，默认全局阈值 70%      |
| `pnpm test:junit`              | 生成 `test-results/vitest-junit.xml`  |
| `pnpm test:component-coverage` | 检查每个组件是否被组件测试覆盖        |
| `pnpm test:e2e`                | 运行 Playwright Chromium E2E 冒烟测试 |
| `pnpm typecheck`               | 运行 Vue/TypeScript 类型检查          |
| `pnpm lint`                    | 运行 oxlint 静态检查                  |
| `pnpm format:check`            | 检查格式化结果                        |
| `pnpm build`                   | 验证生产构建                          |

测试约定：

- 新增或修改组件时，必须同步新增或更新组件测试；每个组件至少保留一个 mount/render smoke test。
- 业务逻辑、session、navigation、API wrapper 等非 UI 能力应补单元测试。
- 网络请求测试使用 MSW，不在测试中请求真实后端。
- 页面级无障碍测试使用 `jest-axe`，E2E 冒烟测试使用 Playwright。
- 覆盖率报告输出到 `coverage/`；Vitest/Playwright JUnit 报告输出到 `test-results/`；Playwright HTML 报告输出到 `playwright-report/`。
- GitHub Actions 会执行安装、peer 检查、测试、覆盖率、组件测试守卫、类型检查、lint、E2E 和 build。

## 项目结构

```txt
src/
├── app/                  # 应用组合层
│   ├── routes/           # 路由聚合、守卫、类型
│   ├── stores/           # 全局状态注册
│   ├── styles/           # Tailwind 与全局样式
│   ├── App.vue
│   └── setup.ts
├── features/             # 业务模块
│   ├── auth/             # 登录、session、认证接口
│   └── docs/             # 模板文档页
├── shared/               # 跨业务基础能力
│   ├── api/              # HTTP client
│   ├── components/       # 非 shadcn 的共享组件
│   ├── config/           # 运行配置
│   ├── lib/              # 工具函数
│   └── ui/               # shadcn-vue primitives
├── main.ts
└── vite-env.d.ts
```

## 环境变量

```env
VITE_APP_NAME="初始化项目"
VITE_API_BASE="/API_BASE"
VITE_API_TARGET="http://xxxx"
VITE_ENABLE_VUE_DEVTOOLS=true
VITE_ENABLE_DEVTOOLS=false
VITE_ENABLE_CODE_INSPECTOR=false
VITE_ENABLE_PERFORMANCE_MONITOR=false
VITE_ENABLE_COMPRESSION=true
VITE_ENABLE_LEGACY=true
VITE_ENABLE_WEB_UPDATE_NOTICE=false
```

## shadcn-vue

配置文件为 `components.json`。添加组件时使用：

```bash
pnpm dlx shadcn-vue@latest add button card
```

组件默认生成到 `src/shared/ui`，工具函数使用 `src/shared/lib/utils.ts`。

## 开发约定

- 新业务放到 `src/features/<name>`。
- feature 内部可以拥有自己的 `pages`、`components`、`api`、`store` 和 `routes.ts`。
- 跨业务基础能力放到 `src/shared/api`、`src/shared/lib`、`src/shared/config`。
- shadcn-vue 组件只放 `src/shared/ui`，不要混入业务逻辑。
- 业务请求必须走 `src/shared/api/http.ts`。
- 提交前建议执行 `pnpm test && pnpm test:coverage && pnpm test:component-coverage && pnpm typecheck && pnpm lint && pnpm test:e2e && pnpm build`。
- 代码格式化使用 `pnpm format`，格式检查使用 `pnpm format:check`。
