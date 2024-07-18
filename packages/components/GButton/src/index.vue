<template>
  <el-button class="g-button">
    <template v-for="(_, name) in $slots" v-slot:[name]="scope">
      <slot :name="name" v-bind="scope || {}" />
    </template>
  </el-button>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped></style>