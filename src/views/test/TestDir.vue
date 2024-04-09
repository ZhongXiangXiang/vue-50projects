<template>
  <div>
    <input type="text" v-focus v-trim v-model="inputVal" />
    <textarea cols="30" rows="3" v-model="val2" v-focus v-trim></textarea>
    <p v-focus v-trim v-copy:bar.foo="'hhhh'">hhhssds</p>
    <button @click="getVal">get val</button>

    <div>复制</div>
    <button @click="handleCopy">copy</button>

    <div>防抖</div>
    <button v-debounce="{ fn: handleDebounce, event: 'click' }">debounce</button>
    <div>节流</div>
    <input type="text" v-model="val3" v-throttle="{ fn: handleInput, event: 'input' }" />
    <div v-pin:warning.right.top="true" class="fix-pos">固定位置</div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'

const instance = getCurrentInstance()

// 测试自定义指令
const inputVal = ref('')
const val2 = ref('')
function getVal() {
  console.log('get val', inputVal.value, val2.value)
}

function handleCopy() {
  navigator.clipboard.writeText('成功复制了')
  instance?.appContext.config.globalProperties.$toast2('复制成功！')
}

function handleDebounce() {
  console.log('触发了..')
}

const val3 = ref('')
function handleInput() {
  console.log('节流，输入搜索请求数据', val3.value)
}
</script>

<style lang="less" scoped>
.fix-pos {
  background-color: green;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
</style>