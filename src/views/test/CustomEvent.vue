<template>
  <div>
    手动自定义事件e
    <button @click="handleClick">dispatchEvent</button>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'

function handleClick() {
  dispatchEvent()
}

// 手动触发一个事件s
function dispatchEvent() {
  // initEvent不在支持
  // const myEvent = document.createEvent('HTMLEvents') // 创建一个event对象实例
  // myEvent.initEvent('aaa', true, true) // 3个参数，冒泡，阻止浏览器默认行为
  const myEvent = new Event('aaa', { bubbles: true, cancelable: true })
  window.dispatchEvent(myEvent) // 触发自定义事件aaa
}

// 在需要的地方，监听该自定义事件aaa
window.addEventListener('aaa', triggerAAA)

function triggerAAA(event: any) {
  console.log('监听到自定义事件aaa', event)
}
onUnmounted(() => {
  window.removeEventListener('aaa', triggerAAA)
})
</script>
