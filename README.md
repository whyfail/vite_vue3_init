# Vue 3 + Vite 企业级开发模板 🚀

一个现代化、高性能、易扩展的 Vue 3 项目初始化模板，集成了企业级开发所需的各种工具和最佳实践。

## 文档

[https://whyfail.github.io/cwa-docs/](https://whyfail.github.io/cwa-docs/)

## ✨ 核心特性

- **现代化框架**：Vue 3 + Vite + Element Plus
- **状态管理**：Pinia + 持久化存储
- **路由管理**：Vue Router 4 + 权限控制
- **网络请求**：Axios + 统一拦截
- **样式方案**：UnoCSS + Sass + Element Plus 主题定制
- **代码质量**：ESLint + Git Hooks + 自动格式化
- **构建优化**：Gzip/Brotli 压缩 + 代码分割 + 资源优化
- **开发体验**：热更新 + 代码检查器 + Vue DevTools
- **浏览器兼容**：Legacy 模式支持旧浏览器
- **更新通知**：自动检测新版本并提示用户

## 🛠️ 技术栈

| 类别             | 技术           | 版本    |
| ---------------- | -------------- | ------- |
| **核心框架**     | Vue            | 3.5.33  |
| **构建工具**     | Vite           | 8.0.10  |
| **UI 组件库**    | Element Plus   | 2.13.7  |
| **状态管理**     | Pinia          | 3.0.4   |
| **路由管理**     | Vue Router     | 5.0.6   |
| **HTTP 客户端**  | Axios          | 1.15.2  |
| **样式方案**     | UnoCSS         | 66.6.8  |
| **样式预处理器** | Sass           | 1.99.0  |
| **工具库**       | Lodash-es      | 4.18.1  |
| **日期处理**     | Dayjs          | 1.11.20 |
| **进度条**       | NProgress      | 0.2.0   |
| **懒加载**       | Vue3 Lazyload  | 0.4.2   |
| **钩子库**       | Vue Hooks Plus | 2.4.3   |
| **Hooks 工具**   | VueUse         | 14.2.1  |

## 📦 快速开始

### 环境要求

- Node.js >= 20.0.0

### 包管理器

- 使用 pnpm@10.33.2 作为包管理器

### 安装依赖

```bash
pnpm install
```

### 启动开发服务

```bash
pnpm run dev
```

服务将在 `http://localhost:5173` 启动，支持热更新。

### 构建生产版本

```bash
pnpm run build
```

构建产物将输出到 `dist` 目录，支持 Gzip 和 Brotli 双压缩。

### 预览构建结果

```bash
pnpm run preview
```

### 代码检查

```bash
pnpm run lint
```

## 📁 项目结构

```
src/
├── apis/           # API 接口管理
├── assets/         # 静态资源
│   ├── css/        # 全局样式
│   └── images/     # 图片资源
├── common/         # 公共常量
├── components/     # 公共组件
├── directive/      # 自定义指令
├── layout/         # 布局组件
├── pages/          # 页面组件
│   ├── module-home/    # 首页模块
│   ├── module-login/   # 登录模块
│   └── module-time/    # 时间模块
├── routes/         # 路由配置
├── stores/         # 状态管理
├── utils/          # 工具函数
├── App.vue         # 根组件
└── main.js         # 入口文件
```

## 🔧 核心功能

### 1. 权限控制

- 基于路由元信息的权限校验
- 登录状态管理
- 权限指令支持

### 2. 主题定制

- Element Plus 主题定制：`src/assets/css/element-plus.scss`
- 支持动态切换主题（可扩展）

### 3. 网络请求

- Axios 封装，统一拦截
- API 模块化管理
- 错误处理机制

### 4. 状态管理

- Pinia 模块化设计
- 支持持久化存储
- 开发环境日志追踪

### 5. 性能优化

- 图片懒加载
- 路由懒加载
- 代码分割策略
- 资源压缩

## 🎨 开发规范

### Git 提交规范

- 建议直接使用AI生成提交信息

### 多人协作建议

```bash
# 1. 添加所有变更
git add -A

# 2. 提交变更
git commit -m "[类型] 详细信息"

# 3. 同步远程分支（推荐使用 rebase）
git pull --rebase

# 4. 解决冲突（如果有）
# - 手动解决冲突
# - git add -A
# - git rebase --continue

# 5. 推送代码
git push
```

### Git 配置建议

```bash
# 忽略换行符差异
git config --global core.autocrlf input

# 文件名大小写敏感
git config --global core.ignorecase false
```

## 🔍 开发工具

### Vue DevTools

项目已集成 `vite-plugin-vue-devtools`，开发时可直接使用 Vue DevTools 扩展。

### 代码检查器

点击页面元素，按住 `Option + Shift`（Mac）或 `Alt + Shift`（Windows），可直接跳转到对应源码位置。

## 🚀 部署建议

1. **构建产物**：`dist` 目录包含所有生产环境所需资源
2. **Nginx 配置**：
   - 配置 Gzip/Brotli 压缩
   - 配置静态资源缓存
   - 配置 SPA 路由 fallback

## 📄 许可证

MIT License

**享受开发，构建美好！** 🎉
