### 新建组件

- 调用 vue skill 新建组件

### 使用Unocss

- 调用 unocss skill

### 使用Element Plus组件

- 调用 element-plus-vue3 skill

### 配置vite

- 调用 vite skill

### 涉及浏览器、DOM、事件处理的地方

- 调用 vueuse-functions skill

### 核心框架

- Vue 3.5.27
- Vue Router 5.0.2
- Pinia 3.0.4
- Element Plus 2.13.2

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

- 不使用TypeScript
- 组件命名使用 PascalCase
- 文件名与组件名保持一致
- 样式使用原子化CSS Unocss
- 优先使用 Element Plus 组件
- 路由配置模块化管理
- API 调用统一封装在 src/apis/ 目录

### 遵循规则

- 严格按照项目目录结构组织代码
- 遵循现有代码风格和命名规范
- 使用项目已安装的依赖库
- 提供清晰的代码注释和文档
- 生成完代码后检查并修复eslint的error、warning问题
