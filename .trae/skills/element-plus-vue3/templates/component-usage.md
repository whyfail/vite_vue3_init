# Component Usage Templates

## Button Usage

```vue
<script setup>
function handleClick() {
  console.log('Clicked');
}
</script>

<template>
  <el-button type="primary" @click="handleClick">
    Click Me
  </el-button>
</template>
```

## Form Usage

```vue
<script setup>
import { ref } from 'vue';

const formRef = ref();
const form = ref({
  name: ''
});

const rules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' }
  ]
};

async function handleSubmit() {
  await formRef.value.validate((valid) => {
    if (valid) {
      console.log('Form:', form.value);
    }
  });
}
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules">
    <el-form-item label="Name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>
```

## Table Usage

```vue
<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
]);
</script>

<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="email" label="Email" />
  </el-table>
</template>
```

## Dialog Usage

```vue
<script setup>
import { ref } from 'vue';

const dialogVisible = ref(false);
</script>

<template>
  <el-button @click="dialogVisible = true">
    Open Dialog
  </el-button>
  <el-dialog v-model="dialogVisible" title="Dialog">
    <span>Dialog Content</span>
  </el-dialog>
</template>
```
