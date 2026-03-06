# Quick Start

## Instructions

This example provides a quick start guide for Element Plus.

### Key Concepts

- Basic setup
- First component
- Global configuration
- Component usage

### Example: Basic Setup

```vue
<script setup>
// Component is auto-imported if using unplugin-vue-components
</script>

<template>
  <el-button type="primary">
    Button
  </el-button>
</template>
```

### Example: With Options API

```vue
<script>
export default {
  methods: {
    handleClick() {
      console.log('Button clicked');
    }
  }
};
</script>

<template>
  <el-button type="primary" @click="handleClick">
    Click Me
  </el-button>
</template>
```

### Example: With Composition API

```vue
<script setup>
function handleClick() {
  console.log('Button clicked');
}
</script>

<template>
  <el-button type="primary" @click="handleClick">
    Click Me
  </el-button>
</template>
```

### Example: Global Configuration

```javascript
import ElementPlus from 'element-plus';
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus, {
  size: 'large',
  zIndex: 3000
});
app.mount('#app');
```

### Example: Using ConfigProvider

```vue
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { ref } from 'vue';

const locale = ref(zhCn);
const size = ref('default');
</script>

<template>
  <el-config-provider :locale="locale" :size="size">
    <el-button>Button</el-button>
  </el-config-provider>
</template>
```

### Key Points

- Use el- prefix for components
- Support both Options API and Composition API
- Configure globally or per component
- Use ConfigProvider for locale and size
- Import styles for components
