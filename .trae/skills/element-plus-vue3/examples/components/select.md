# Select Component

**官方文档**: https://element-plus.org/en-US/component/select.html

## Instructions

This example demonstrates the Select component in Element Plus.

### Key Concepts

- Select options
- Select multiple
- Select filtering
- Select events

### Example: Basic Select

```vue
<script setup>
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <el-select v-model="value" placeholder="Select">
    <el-option label="Option 1" value="1" />
    <el-option label="Option 2" value="2" />
    <el-option label="Option 3" value="3" />
  </el-select>
</template>
```

### Example: Select with Options Array

```vue
<script setup>
import { ref } from 'vue';

const value = ref('');
const options = ref([
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]);
</script>

<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
```

### Example: Multiple Select

```vue
<script setup>
import { ref } from 'vue';

const value = ref([]);
</script>

<template>
  <el-select v-model="value" multiple placeholder="Select multiple">
    <el-option label="Option 1" value="1" />
    <el-option label="Option 2" value="2" />
    <el-option label="Option 3" value="3" />
  </el-select>
</template>
```

### Example: Filterable Select

```vue
<template>
  <el-select
    v-model="value"
    filterable
    placeholder="Search and select"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
```

### Example: Select Events

```vue
<script setup>
import { ref } from 'vue';

const value = ref('');

function handleChange(val) {
  console.log('Changed:', val);
}

function handleVisibleChange(visible) {
  console.log('Visible:', visible);
}
</script>

<template>
  <el-select
    v-model="value"
    @change="handleChange"
    @visible-change="handleVisibleChange"
  >
    <el-option label="Option 1" value="1" />
    <el-option label="Option 2" value="2" />
  </el-select>
</template>
```

### Key Points

- Use v-model for selected value
- Use el-option for options
- Support multiple selection
- Enable filtering with filterable
- Handle change and visible-change events
