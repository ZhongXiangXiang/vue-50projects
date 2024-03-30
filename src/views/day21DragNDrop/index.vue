<template>
  <div class="bg">
    <div
      v-for="(box, index) in boxList"
      :key="index"
      class="box"
      :class="{ hovered: box.hovered }"
      @dragover="handleDragover(index, $event)"
      @dragenter="handleDragEnter(index, $event)"
      @dragleave="dragLeave(index)"
      @drop="dragDrop(index)"
    >
      <div
        class="img"
        draggable="true"
        v-show="box.show"
        :class="{ hold: box.hold }"
        @dragstart="handleDragstart(index)"
        @dragend="handleDragend(index)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const boxList = reactive<
  {
    show: boolean
    hold: boolean
    hovered: boolean
  }[]
>([
  { show: true, hold: false, hovered: false },
  { show: false, hold: false, hovered: false },
  { show: false, hold: false, hovered: false },
  { show: false, hold: false, hovered: false },
  { show: false, hold: false, hovered: false }
])

// img
function handleDragstart(index: number) {
  console.log('start', index)
  boxList[index].hold = true
  setTimeout(() => (boxList[index].show = false), 0)
}

function handleDragend(index: number) {
  boxList[index].hold = false
  const hasEl = boxList.find((item) => item.show)
  console.log('end', index, hasEl)
  if (!hasEl) {
    boxList[index].show = true
  }
}

// box
function handleDragEnter(index: number, e: any) {
  console.log('enter', index)

  // 防止浏览器对数据的默认处理
  e.preventDefault()
  boxList.forEach((item) => (item.hovered = false))
  boxList[index].hovered = true
}

function handleDragover(index: number, e: any) {
  console.log('over', index)

  // 默认情况下，不能在其他元素中放置数据/元素。为了允许放置，必须阻止元素的默认处理
  // 否则，放开元素时，只会触发leave，不会触发drop事件
  e.preventDefault()
}

function dragLeave(index: number) {
  console.log('leave,,', index)

  boxList[index].hovered = false
}

function dragDrop(index: number) {
  console.log('drop,,', index)

  boxList[index].hovered = false
  boxList.forEach((item) => (item.show = false))
  boxList[index].show = true
}
</script>

<style lang="less" scoped>
.bg {
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    width: 150px;
    height: 150px;
    border: 3px solid #000;
    margin: 10px;
    background-color: #fff;
    &.hovered {
      background-color: #333;
      border-color: #fff;
      border-style: dashed;
    }

    .img {
      width: 100%;
      height: 100%;
      background-image: url('@/assets/imgs/childhood.jpg');
      background-size: cover;
      background-position: center center;
      cursor: pointer;

      &.hold {
        border: 5px solid #ccc;
      }
    }
  }
}

@media (max-width: 800px) {
  .bg {
    flex-direction: column;
  }
}
</style>
