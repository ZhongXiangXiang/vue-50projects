<template>
  <div class="bg" :class="{ dark: darkMode }" :style="{ '--bgColor': 'green' }">
    <button class="mode" @click="toggleMode">{{ darkMode ? 'Light' : 'Dark' }} mode</button>

    <div class="clock">
      <div
        class="needle hour"
        :style="{
          transform: `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`
        }"
      ></div>
      <div
        class="needle minute"
        :style="{
          transform: `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
        }"
      ></div>
      <div
        class="needle second"
        :style="{
          transform: `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
        }"
      ></div>
      <div class="center-point"></div>
    </div>

    <div class="time">{{ time }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

let timer: number
onMounted(() => {
  setTime()
  timer = setInterval(setTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const time = ref('')
const date = ref('')

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function setTime() {
  const now = dayjs(new Date())
  time.value = dayjs(new Date()).format('hh:mm A')
  date.value = dayjs(new Date()).format('dddd,MMM DD')

  hours.value = Number(now.format('hh'))
  minutes.value = Number(now.format('mm'))
  seconds.value = Number(now.format('ss'))
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const darkMode = ref(false)
function toggleMode() {
  darkMode.value = !darkMode.value
}
</script>

<style lang="less" scoped>
@primary-color: #000;
@secondary-color: #fff;
@red: #e74c3c;

@dark-color: black;
// .bg.dark {
//   @primary-color: #fff;
//   @secondary-color: #333;
// }
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in;
  .mode {
    background: @primary-color;
    color: @secondary-color;
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    border: 0;
    color: var(--bgColor);
  }

  .clock {
    position: relative;
    width: 200px;
    height: 200px;
    margin-top: 30px;
    .needle {
      width: 3px;
      height: 65px;
      background: @primary-color;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: bottom center;
      transition: all 0.5s ease-in linear;
      &.hour {
        transform: translate(-50%, -100%) rotate(0deg);
      }
      &.minute {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 100px;
      }
      &.second {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 100px;
        background-color: @red;
      }
    }

    .center-point {
      background-color: @red;
      width: 10px;
      height: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      &::after {
        content: '';
        width: 5px;
        height: 5px;
        background: @primary-color;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
    }
  }

  .time {
    font-size: 60px;
    color: var(--bgColor);
  }

  .date {
    color: #aaa;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  &.dark {
    background: @dark-color;
    color: #fff;
    .mode {
      background: #fff;
      color: @dark-color;
    }
    .hour {
      background: #fff;
    }
    .minute {
      background: #fff;
    }
  }
}
</style>
