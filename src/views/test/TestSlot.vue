<template>
  <div>
    <div>测试插槽</div>
    <Child>
      <template v-slot:header="headerProps">
        <!-- 插槽内容，无法访问子组件域内的数据 -->
        <!-- 需要访问，需要子组件向插槽出口传递attributes -->
        <h3>i am header content-{{ headerProps }}</h3>
      </template>
      <template v-slot:default="slotProps">
        <p>i am default slot-{{ slotProps }}</p>
      </template>
      <template #item="itemSlots">
        <p>item is: {{ itemSlots }}</p>
      </template>
    </Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
</script>
