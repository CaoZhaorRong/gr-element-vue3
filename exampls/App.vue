<script setup lang="ts">
import { ref, onMounted } from 'vue'

const data = ref([])

const columns = [
  {
    label: '姓名',
    prop: 'login',
  },
  {
    label: '地址',
    prop: 'html_url',
  }
]
const fetchData = async () => {
  const res = await fetch('https://api.github.com/users')
  data.value = await res.json()
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="main-container">
    <g-table :data="data" :columns="columns" />
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.g-table {
  flex: 1;
}
</style>
