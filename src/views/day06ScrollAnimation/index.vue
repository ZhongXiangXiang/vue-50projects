<template>
  <div class="container" ref="containerRef">
    <h1>scroll to see the animation</h1>
    <div class="content-list" ref="contentListRef">
      <div class="item" v-for="item in 15" :key="item">Content-{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'

const contentListRef = shallowRef<HTMLDivElement | null>(null)
const containerRef = shallowRef<HTMLDivElement | null>(null)

onMounted(() => {
  ;(containerRef.value as HTMLDivElement).addEventListener('scroll', scrollToView)
  scrollToView()
})

function scrollToView() {
  const elements: HTMLCollection = (contentListRef.value as HTMLDivElement).children
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    if (isInViewPort(element)) {
      element.classList.add('show')
    } else {
      element.classList.remove('show')
    }
  }
}

function isInViewPort(element: any) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const { top, right, bottom, left } = element.getBoundingClientRect()

  return top <= viewHeight - 180
  // return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight
}
</script>


<style lang="less" scoped>
.container {
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  background-color: steelblue;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transform: translateX(400%);
  transition: transform 0.4s ease;
  &:nth-of-type(even) {
    transform: translateX(-400%);
  }
  &.show {
    transform: translateX(0);
  }
}
</style>
