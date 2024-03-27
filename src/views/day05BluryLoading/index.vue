<template>
  <div class="container">
    <div class="bg" ref="bgRef"></div>
    <div class="progress" ref="progressRef">{{ load }}%</div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'

const blurMaxium = 100
const blurDegree = ref(blurMaxium)
const blurPercentage = ref(0)

const bgRef = shallowRef<HTMLDivElement | null>(null)
const progressRef = shallowRef<HTMLDivElement | null>(null)

let load = ref(0)
let timer = setInterval(blurring, 30)

function blurring() {
  load.value++
  if (load.value > 99) {
    clearInterval(timer)
  }

  ;(progressRef.value as HTMLDivElement).style.opacity = String(scale(load.value, 0, 100, 1, 0))
  ;(bgRef.value as HTMLDivElement).style.filter = `blur(${scale(load.value, 0, 100, 30, 0)}px)`

  // blurDegree.value--
  // blurPercentage.value = Number((((blurMaxium - blurDegree.value) / blurMaxium) * 100).toFixed(0))
  // console.log(blurDegree.value, blurPercentage.value)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
</script>


<style lang="less" scoped>
.container {
  position: relative;
  width: 80%;
  height: 90vh;
  overflow-y: auto;
}
.bg {
  background-image: url('@/assets/imgs/四驱兄弟.png');
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px);
  transition: filter;
}
.progress {
  font-size: 34px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>