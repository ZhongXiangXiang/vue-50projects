<template>
  <div class="container">
    <div class="progress-container">
      <div class="progress" :style="{ width: progressWidth }"></div>
      <div
        v-for="item in stepList"
        :key="item"
        class="circle"
        :class="{ active: currentStep >= item }"
      >
        {{ item }}
      </div>
    </div>
    <div class="progress-container2">
      <div
        v-for="item in stepList"
        :key="item"
        class="circle2"
        :class="{ active: currentStep >= item }"
      >
        {{ item }}
      </div>
    </div>

    <button class="btn" :disabled="currentStep === stepList[0]" @click="handlePrev">Prev</button>
    <button class="btn" :disabled="currentStep === stepList.length" @click="hanldeNext">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const stepList = ref<number[]>([1, 2, 3, 4])
const currentStep = ref<number>(1)
function hanldeNext() {
  if (currentStep.value === stepList.value.length) {
    return
  }

  currentStep.value++
  updateProgressWidth()
}
function handlePrev() {
  if (currentStep.value > 1) {
    currentStep.value--
    updateProgressWidth()
  }
}
const progressWidth = ref('')
function updateProgressWidth() {
  progressWidth.value = ((currentStep.value - 1) / (stepList.value.length - 1)) * 100 + '%'
}
</script>


<style lang="less" scoped>
@line-border-fill: #3498db;
@line-border-empty: #e0e0e0;

.container {
  text-align: center;
}
.progress-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: '';
    background: @line-border-empty;
    position: absolute;
    top: 50%;
    left: 0;
    height: 4px;
    width: 100%;
    z-index: -1;
    transform: translateY(-50%);
  }

  .progress {
    width: 0%;
    height: 4px;
    background: @line-border-fill;
    position: absolute;
    // top: 50%;
    // left: 0;
    z-index: -1;
    transition: 0.4s ease;
  }

  .circle {
    background-color: #fff;
    color: #e2e2e2;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 3px solid @line-border-empty;
    transition: 0.4s ease;
    &.active {
      border-color: @line-border-fill;
    }
  }
}

.btn {
  margin-right: 10px;
  background: @line-border-fill;
  border-radius: 6px;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 8px 30px;
  &:disabled {
    background: @line-border-empty;
    cursor: not-allowed;
  }
  &:active {
    transform: scale(0.98);
  }
}

.progress-container2 {
  margin-bottom: 30px;
  display: flex;
  .circle2 {
    width: 20px;
    height: 20px;
    line-height: 14px;
    text-align: center;
    border-radius: 10px;
    background: #fff;
    border: 3px solid @line-border-empty;
    margin-right: 60px;

    transition: all 700ms ease;

    padding-left: 3px;
    display: flex;
    align-items: center;
    position: relative;
    &:not(:first-of-type)::before {
      content: '';
      display: inline-block;
      height: 4px;
      width: 90px;
      background: @line-border-empty;
      color: @line-border-empty;
      line-height: 6px;
      position: absolute;
      right: -2px;
      z-index: -1;
      transition: all 700ms ease;
    }
    &.active {
      border-color: @line-border-fill;
    }
    &.active::before {
      color: @line-border-fill;
      background: @line-border-fill;
    }
  }
}
</style>

