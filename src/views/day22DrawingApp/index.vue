<template>
  <div class="bg">
    <canvas
      ref="canvas"
      class="canvas"
      width="800"
      height="600px"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
    ></canvas>
    <div class="toolbox">
      <button class="decrease" @click="decreaseSize">-</button>
      <span class="size">{{ size }}</span>
      <button class="increase" @click="increaseSize">+</button>
      <input type="color" class="color" v-model="color" />
      <button class="clear" @click="clearDrawing">x</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref<any>(null)
let ctx: CanvasRenderingContext2D

onMounted(() => {
  ctx = canvas.value.getContext('2d')
})

const size = ref(10)
let isPressed = false
const color = ref('black')
let x: number
let y: number

function mouseDown(e: any) {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
  console.log(e.offsetX, e.target.offsetLeft, ctx)
}

document.addEventListener('mouseup', (e: any) => {
  isPressed = false

  x = 0
  y = 0
})

function mouseMove(e: any) {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x as number, y as number, x2, y2)

    x = x2
    y = y2
  }
}

function drawCircle(x: number, y: number) {
  ctx.beginPath()
  ctx.arc(x, y, size.value, 0, Math.PI * 2)
  ctx.fillStyle = color.value
  ctx.fill()
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color.value
  ctx.lineWidth = size.value * 2
  ctx.stroke()
}

function increaseSize() {
  if (size.value < 50) {
    size.value += 5
  }
}
function decreaseSize() {
  if (size.value > 5) {
    size.value -= 5
  }
}

function clearDrawing() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
}
</script>

<style lang="less" scoped>
.canvas {
  border: 2px solid steelblue;
}
// > 直接子元素；+ 相邻的兄弟元素，紧跟其后的那个元素；~ 具有相同父元素，在该元素后面的所有元素，不需要紧随
.toolbox {
  display: flex;
  background-color: steelblue;
  border: 1px solid slateblue;
  width: 804px;
  padding: 1rem;
}
.toolbox > * {
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  margin: 0.25rem;
  padding: 0.25rem;
  cursor: pointer;
  &:last-child {
    margin-left: auto;
  }
}
</style>