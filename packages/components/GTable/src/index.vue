<template>
  <el-table class="g-table" :data="props.data" v-bind="$attrs">
    <el-table-column v-bind="item" v-for="item in props.columns" :key="item.prop">
      <template v-for="(_, name) in $slots" v-slot:[name]="scope">
        <slot :name="name" v-bind="scope" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang='ts'>
import { ElTable, ElTableColumn } from 'element-plus'


const props = defineProps<{ data: any[], columns: any[] }>()

const emit = defineEmits<{
  (e: 'update:current-page', page: number): void
}>()

</script>

<style lang='scss' scoped></style>