<template>
  <!-- 作用域插槽使用场景：
    1、渲染列表，向远端请求数据渲染，单个列表内容样式由父组件控制
    2、多次渲染slot, 并每次提供不同的数据
  -->
  <div>
    <header>
      <!-- 向插槽出口传递attributes，让在父组件的插槽内容可以访问 -->
      <slot name="header" :message="message"></slot>
    </header>
    <main>
      <slot :message="message" :count="1"></slot>
    </main>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <!-- 使用v-bind传递props，会将一个对象的所有属性都作为attribute应用到目标元素上 -->
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('你好啊， 我来自子组件')

const items = ref([
  { name: 'zxx', age: 18 },
  { name: 'zxx2', age: 20 }
])
</script>
