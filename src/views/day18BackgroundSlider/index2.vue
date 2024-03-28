<template>
  <div class="bg" :style="{ backgroundImage: `url(${imgList[currentIndex]})` }">
    <div class="slider-container">
      <div class="slide" :style="{ backgroundImage: `url(${imgList[currentIndex]})` }"></div>
      <button class="arrow left-arrow" id="left" @click="handleNext">
        <i class="fas fa-arrow-left"></i>
      </button>

      <button class="arrow right-arrow" id="right" @click="handleUp">
        <i class="fas fa-arrow-right"></i>
      </button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 100vw;
  height: 100vh;
  // position: relative;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }

  .slider-container {
    box-shadow: 0 3px 6px rgba(227, 23, 23, 0.16);
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    height: 70vh;
    width: 70vw;
    overflow: hidden;
    position: relative;
  }
  .slide {
    width: 100vh;
    height: 100vw;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: -15vh;
    left: -15vw;
    z-index: 1;
  }

  .arrow {
    position: fixed;
    background-color: transparent;
    color: #fff;
    padding: 20px;
    font-size: 30px;
    border: 2px solid orange;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .arrow:focus {
    outline: 0;
  }

  .left-arrow {
    left: calc(15vw - 65px);
  }

  .right-arrow {
    right: calc(15vw - 65px);
  }
}
</style>
