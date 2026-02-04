### 核心框架

- Vue 3.5.27
- Vue Router 5.0.2
- Pinia 3.0.4
- Element Plus 2.13.2

### 构建与运行环境

- Vite 8.0.0-beta.11
- Node.js ^20.0.0 || ^20.11.1 || >=22.0.0
- npm 作为包管理器（强制）

### 代码风格

- 遵循 eslint.config.mjs 配置

### 目录结构

- src/apis/ - API 接口
- src/assets/ - 静态资源
- src/common/ - 公共常量
- src/components/ - 公共组件
- src/directive/ - 自定义指令
- src/layout/ - 布局组件
- src/pages/ - 页面组件
- src/routes/ - 路由配置
- src/stores/ - Pinia 状态管理
- src/utils/ - 工具函数

### 性能注意

- 避免模板中直接使用复杂计算
- 避免渲染函数中大量 DOM 操作

### 其他规范

- 组件命名使用 PascalCase
- 文件名与组件名保持一致
- 使用 SCSS 作为 CSS 预处理器
- 优先使用 Element Plus 组件
- 路由配置模块化管理
- API 调用统一封装在 src/apis/ 目录

### 遵循规则

- 严格按照项目目录结构组织代码
- 遵循现有代码风格和命名规范
- 使用项目已安装的依赖库
- 确保代码符合 ESLint 检查要求
- 提供清晰的代码注释和文档
