# Table Component

**官方文档**: https://element-plus.org/en-US/component/table.html

## Instructions

This example demonstrates the Table component in Element Plus.

### Key Concepts

- Table data
- Table columns
- Table selection
- Table sorting
- Table filtering
- Table pagination

### Example: Basic Table

```vue
<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: 'John', email: 'john@example.com', age: 25 },
  { name: 'Jane', email: 'jane@example.com', age: 30 }
]);
</script>

<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="email" label="Email" />
    <el-table-column prop="age" label="Age" />
  </el-table>
</template>
```

### Example: Table with Selection

```vue
<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
]);

function handleSelectionChange(selection) {
  console.log('Selected:', selection);
}
</script>

<template>
  <el-table
    :data="tableData"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="email" label="Email" />
  </el-table>
</template>
```

### Example: Table with Sorting

```vue
<template>
  <el-table :data="tableData" default-sort="{ prop: 'age', order: 'ascending' }">
    <el-table-column prop="name" label="Name" sortable />
    <el-table-column prop="age" label="Age" sortable />
  </el-table>
</template>
```

### Example: Table with Filtering

```vue
<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: 'John', status: 'active' },
  { name: 'Jane', status: 'inactive' }
]);

const filters = [
  { text: 'Active', value: 'active' },
  { text: 'Inactive', value: 'inactive' }
];

function filterMethod(value, row) {
  return row.status === value;
}
</script>

<template>
  <el-table :data="tableData">
    <el-table-column prop="status" label="Status" :filters="filters" :filter-method="filterMethod">
      <template #default="{ row }">
        <el-tag :type="row.status === 'active' ? 'success' : 'info'">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>
```

### Example: Table with Pagination

```vue
<script setup>
import { computed, ref } from 'vue';

const tableData = ref([
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
  // ... more data
]);

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;

  return tableData.value.slice(start, end);
});

function handleSizeChange(val) {
  pageSize.value = val;
}

function handleCurrentChange(val) {
  currentPage.value = val;
}
</script>

<template>
  <el-table :data="paginatedData">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="email" label="Email" />
  </el-table>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="total"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
```

### Key Points

- Use :data for table data
- Define columns with el-table-column
- Support selection, sorting, filtering
- Use pagination for large datasets
- Customize columns with slots
