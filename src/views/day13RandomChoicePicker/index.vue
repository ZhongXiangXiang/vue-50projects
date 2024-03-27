<template>
  <div class="bg">
    <div class="container">
      <h2 class="title">
        Enter all of the choices divided by a comma (',').
        <br />Press enter when you're done
      </h2>
      <textarea
        placeholder="Enter choices here..."
        class="input"
        v-model="text"
        @input="handleInput"
        @keyup="handleKeyup"
      ></textarea>
      <div class="icon-list">
        <div
          class="icon"
          v-for="(item, index) in iconList"
          :key="index"
          :class="{ highlight: item.highlight }"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ListItem {
  value: string
  highlight: boolean
}

const text = ref('')
const iconList = ref<ListItem[]>([])
function handleInput() {
  clearTiming()

  iconList.value = text.value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item)
    .map((item) => ({ value: item, highlight: false }))
}

function handleKeyup(e: any) {
  if (e.key === 'Enter') {
    setTimeout(() => {
      text.value = ''
    }, 10)

    randomSelect()
  }
}

let interval: number
let timer: number

function clearTiming() {
  clearInterval(interval)
  clearTimeout(timer)
}

function randomSelect() {
  const times = 30

  interval = setInterval(() => {
    const randomTag = pickRandomTag()
    if (randomTag) {
      randomTag.highlight = true

      setTimeout(() => {
        randomTag.highlight = false
      }, 100)
    }
  }, 100)

  timer = setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      // hightlight 最后一个选中的
      randomTag.highlight = true
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  return iconList.value[Math.floor(Math.random() * iconList.value.length)]
}
</script>

<style lang="less" scoped>
.bg {
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .container {
    width: 500px;
  }
  .title {
    text-align: center;
  }
  .input {
    width: 100%;
    height: 100px;
  }
  .icon-list {
    text-align: left;
  }
  .icon {
    padding: 6px 10px;
    border-radius: 15px;
    background: orange;
    display: inline-block;
    margin-right: 10px;
    color: #fff;
    &.highlight {
      background-color: #273c75;
    }
  }
}
</style>
