<template>
  <div class="bg">
    <button v-if="!keyInfo.key" class="btn">Press any key to get the keycode</button>
    <template v-else>
      <div class="item" v-for="(item, index) in eventList" :key="index">
        <div class="label">{{ item.label }}</div>
        <button class="btn">{{ keyInfo[item.value] }}</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const keyInfo = reactive<{ key: string; keyCode: number | null; code: string }>({
  key: '',
  keyCode: null,
  code: ''
})
const eventList = reactive<{ label: string; value: 'key' | 'keyCode' | 'code' }[]>([
  { label: 'event.key', value: 'key' },
  { label: 'event.keyCode', value: 'keyCode' },
  { label: 'event.code', value: 'code' }
])

document.addEventListener('keydown', (e) => {
  const { key, keyCode, code } = e
  keyInfo.key = key.trim() || code
  keyInfo.keyCode = keyCode
  keyInfo.code = code
})
</script>

<style lang="less" scoped>
.bg {
  background-color: #f4f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    text-align: center;
  }
  .btn {
    border: 1px solid #333;
    background-color: #fff;
    padding: 10px 30px;
    min-width: 100px;
    margin: 10px;
    font-size: 24px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
  }
  .label {
    color: #c4c4c4;
  }
}
</style>