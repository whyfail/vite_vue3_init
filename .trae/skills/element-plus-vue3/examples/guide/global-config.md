# Global Configuration

## Instructions

This example demonstrates how to configure Element Plus globally.

### Key Concepts

- Global config options
- ConfigProvider
- Size configuration
- z-index configuration

### Example: Global Config

```javascript
import ElementPlus from 'element-plus';
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus, {
  size: 'large',
  zIndex: 3000,
  locale: zhCn
});
app.mount('#app');
```

### Example: Using ConfigProvider

```vue
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { ref } from 'vue';

const size = ref('default');
const zIndex = ref(3000);
const locale = ref(zhCn);
const input = ref('');
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
    <el-button>Button</el-button>
    <el-input v-model="input" />
  </el-config-provider>
</template>
```

### Example: Size Configuration

```vue
<script setup>
import { ref } from 'vue';

const size = ref('default'); // 'large' | 'default' | 'small'
</script>

<template>
  <el-config-provider :size="size">
    <el-button>Button</el-button>
    <el-input v-model="input" />
  </el-config-provider>
</template>
```

### Example: z-index Configuration

```vue
<script setup>
import { ref } from 'vue';

const zIndex = ref(3000);
const visible = ref(false);
</script>

<template>
  <el-config-provider :z-index="zIndex">
    <el-dialog v-model="visible" title="Dialog">
      Content
    </el-dialog>
  </el-config-provider>
</template>
```

### Key Points

- Configure globally via app.use()
- Use ConfigProvider for component-level config
- Size: 'large' | 'default' | 'small'
- z-index: number (default: 3000)
- Locale: locale object
