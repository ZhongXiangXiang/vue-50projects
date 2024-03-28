<template>
  <div class="bg">
    <img :src="imgList[currentIndex]" alt="aa" class="bg-img" />

    <div class="container">
      <div class="arrow left-arrow" @click="handleUp">
        <div class="arrow-inner">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </div>

      <div class="img">dd</div>

      <div class="arrow right-arrow" @click="handleNext">
        <div class="arrow-inner">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imgList = ['src/assets/imgs/childhood.jpg', 'src/assets/imgs/四驱兄弟.png']

const currentIndex = ref(0)
function handleNext() {
  if (currentIndex.value >= imgList.length - 1) {
    currentIndex.value = 0
    return
  }
  currentIndex.value++
}

function handleUp() {
  if (currentIndex.value === 0) {
    currentIndex.value = imgList.length - 1
    return
  }
  currentIndex.value--
}
</script>


<style lang="less" scoped>
.bg {
  position: relative;
}
.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.arrow {
  border: 3px solid orange;
  width: 60px;
  height: 60px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.left-arrow {
    border-right: none;
  }
  &.right-arrow {
    border-left: none;
  }
}
.img {
  width: 500px;
  height: 300px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
}

.line {
  width: 20px;
  height: 4px;
  border-radius: 2px;
  background: #fff;
  &.line2 {
    width: 30px;
  }
  &.line1 {
    transform: rotate(45deg) translateX(10px) translateY(-12px);
  }
  &.line3 {
    transform: rotate(-45deg) translateX(10px) translateY(12px);
  }
}

.left-arrow {
  .line1 {
    transform: rotate(-45deg) translateX(-2px) translateY(-4px);
  }
  .line3 {
    transform: rotate(45deg) translateX(-2px) translateY(4px);
  }
}
</style>
