<template>
  <div class="test-comp">
    <button @click="handleClick">click</button>
    <button @click="handleClick2">click toast2</button>

    <h2>transition标签</h2>
    <TransitionComp />

    <h2>自定义指令</h2>
    <testDir />

    <CustomEvent />

    <h2>test slot</h2>
    <TestSlot />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import TransitionComp from './TransitionComp.vue'
import TestDir from './TestDir.vue'
import CustomEvent from './CustomEvent.vue'
import TestSlot from './TestSlot.vue'

const instance = getCurrentInstance()
let index = 0
function handleClick() {
  instance?.appContext.config.globalProperties.$toast('hihi' + index++)
}

function handleClick2() {
  instance?.appContext.config.globalProperties.$toast2('hihi' + index++, 'success')
}
</script>

<style lang="less" scoped>
.test-comp {
  overflow: auto;
}
</style>
