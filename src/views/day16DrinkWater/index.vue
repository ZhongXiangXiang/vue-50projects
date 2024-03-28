<template>
  <div class="bg">
    <div class="container">
      <h1>Drink Water</h1>
      <div class="goal">Goal: 2 Liters</div>

      <div class="bottle">
        <div
          v-if="drunkCups < cups"
          class="remained"
          :style="{ height: `${100 - drunkPercentage}%` }"
        >
          <div class="num">{{ remained }}L</div>
          <div class="text">Remained</div>
        </div>
        <div v-if="drunkCups > 0" class="drunk" :style="{ height: `${drunkPercentage}%` }">
          {{ drunkPercentage }}%
        </div>
      </div>

      <div class="tip">Select how many glasses of water that you have drank</div>
      <div class="cups">
        <div
          v-for="item in cups"
          :key="item"
          class="cup"
          :class="{ active: drunkCups >= item }"
          @click="handleDrink(item)"
        >
          250 ml
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cups = ref(8)
const drunkCups = ref(0)
const drunkPercentage = ref(0)
const total = 2
const remained = ref(2)
function handleDrink(number: number) {
  drunkCups.value = number
  drunkPercentage.value = (number / cups.value) * 100
  remained.value = total - (total * drunkPercentage.value) / 100
}
</script>


<style lang="less" scoped>
@border-color: #144fc6;
@fill-color: #6ab3f8;
.bg {
  background: #3494e4;
  overflow: auto;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h1 {
    margin-top: 10px;
  }
  .bottle {
    border: 4px solid @border-color;
    border-radius: 0 0 40px 40px;
    height: 300px;
    width: 150px;
    color: @border-color;
    position: relative;
    background: #fff;
    margin-top: 30px;
    overflow: hidden;
    .remained {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: height 0.3s linear;
    }
    .num {
      font-weight: bold;
      font-size: 20px;
    }
    .drunk {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: @fill-color;
      font-size: 26px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: height 0.3s linear;
    }
  }
  .tip {
    margin: 50px 0 20px 0;
  }
  .cups {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 280px;
    .cup {
      border: 4px solid @border-color;
      border-radius: 0 0 15px 15px;
      height: 100px;
      width: 50px;
      margin: 10px;
      color: blue;
      background: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 16px;
      transition: 0.3s ease;
      &.active {
        background: @fill-color;
        color: #fff;
      }
    }
  }
}
</style>