# Global Configuration

## API Reference

Element Plus global configuration options.

### Global Config Options

When using `app.use(ElementPlus, options)`, you can pass:

```typescript
interface ElementPlusOptions {
  size?: 'large' | 'default' | 'small'
  zIndex?: number
  locale?: Locale
}
```

### ConfigProvider Props

**Props:**

- `size` - Global size (large, default, small)
- `zIndex` - Global z-index (default: 3000)
- `locale` - Locale object
- `button` - Button config
- `message` - Message config

### Example: Global Config

```javascript
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { createApp } from 'vue';

const app = createApp(App);

app.use(ElementPlus, {
  size: 'large',
  zIndex: 3000,
  locale: zhCn
});
```

### Example: ConfigProvider

```vue
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { ref } from 'vue';

const size = ref('default');
const zIndex = ref(3000);
const locale = ref(zhCn);
</script>

<template>
  <el-config-provider
    :size="size"
    :z-index="zIndex"
    :locale="locale"
  >
    <el-button>Button</el-button>
  </el-config-provider>
</template>
```

### Size Configuration

**Options:**

- `'large'` - Large size
- `'default'` - Default size
- `'small'` - Small size

### z-index Configuration

**Default:** `3000`

Controls z-index for overlays (Dialog, Drawer, etc.).

### Locale Configuration

Import locale from `element-plus/dist/locale/`:

- `zh-cn.mjs` - Chinese (Simplified)
- `en.mjs` - English
- `es.mjs` - Spanish
- `fr.mjs` - French
- `ja.mjs` - Japanese
- `ko.mjs` - Korean

**See also:** `examples/guide/i18n.md` for i18n examples
