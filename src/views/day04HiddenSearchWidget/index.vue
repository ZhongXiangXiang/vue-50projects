<template>
  <div class="container">
    <div class="search-container" :class="[isActive ? 'active' : '']">
      <input ref="inputRef" type="text" placeholder="Search..." />
      <button @click="handleSearch">search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
const inputRef = ref<HTMLDivElement | null>(null)
function handleSearch() {
  // if (inputRef.value) {
  //   inputRef.value.focus()
  // }
  ;(inputRef.value as HTMLDivElement).focus()
  isActive.value = !isActive.value
}
</script>

<style lang="less" scoped>
.container {
  background: var(--color-text);
  // background: #f1f1f1;
  height: 80vh;
  overflow: hidden; // 父子div会造成塌陷，公用一个上外边距-》解决方法:
  // border: 1px solid; // 或者加外边框
  // padding-top: 1px; // 或内边距
  .search-container {
    width: fit-content;
    margin: 50px auto;
    &.active {
      input {
        width: 200px;
        padding: 0 10px;
      }
    }
  }
  input {
    border: none;
    outline: none;
    width: 0;
    height: 50px;
    transition: width 0.3s linear;
    font-size: 20px;
  }
  button {
    border: none;
    background: #fff;
    height: 50px;
    font-size: 20px;
  }
}
</style>
