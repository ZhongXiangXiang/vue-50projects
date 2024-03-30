<template>
  <div class="bg">
    <button
      v-for="(btn, index) in btnList"
      :key="index"
      :style="{ '--color': btn.color }"
      class="btn"
      @click="handleClick(index, $event)"
    >
      {{ btn.text }}
      <span class="circle" v-show="btn.show" ref="span"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const span = ref<any>(null)
const btnList = reactive<{ text: string; show: boolean; color: string }[]>([
  { text: 'Click Me', show: false, color: 'purple' },
  { text: 'Click Me', show: false, color: 'skyblue' },
  { text: 'Click Me', show: false, color: 'orange' }
])

function handleClick(index: number, e: MouseEvent) {
  // target.offsetLeft-> button的左边县距离document的距离
  // e.pageX-> 鼠标点击位置距离document的左边距

  btnList[index].show = true
  const x = e.pageX
  const y = e.pageY

  const buttonTop = (e.target as HTMLDivElement).offsetTop
  const buttonLeft = (e.target as HTMLDivElement).offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  span.value[index].style.top = `${yInside}px`
  span.value[index].style.left = `${xInside}px`

  setTimeout(() => {
    btnList[index].show = false
  }, 500)
}
</script>


<style lang="less" scoped>
.bg {
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    border: none;
    text-transform: uppercase;
    padding: 20px 30px;
    color: #fff;
    letter-spacing: 2px;
    background: var(--color);
    position: relative;
    overflow: hidden;
    margin: 10px;

    .circle {
      position: absolute;
      background-color: #fff;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      animation: scale 0.5s ease-out;
    }

    @keyframes scale {
      to {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
      }
    }
  }
}
</style>