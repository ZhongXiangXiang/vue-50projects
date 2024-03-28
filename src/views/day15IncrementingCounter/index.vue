<template>
  <div class="bg">
    <div class="item" v-for="(item, index) in itemList" :key="index">
      <div class="num">{{ item.number }}</div>
      <div class="text">{{ item.platform }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface PlatforInfo {
  number: number
  total: number
  platform: string
}
const itemList = ref<PlatforInfo[]>([
  { number: 0, total: 12000, platform: 'Twitter followers' },
  { number: 0, total: 5000, platform: 'YouTube Subscribers' },
  { number: 0, total: 7500, platform: 'Facebook Fans' }
])

itemList.value.forEach((item) => {
  updateCounter(item)
})

function updateCounter(item: PlatforInfo) {
  if (item.number >= item.total) {
    item.number = item.total
  } else {
    const increment = item.total / 200
    item.number = Math.ceil(item.number + increment)
    setTimeout(() => {
      updateCounter(item)
    }, 10)
  }
}
</script>

<style lang="less" scoped>
.bg {
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    color: #fff;
    margin: 0 20px;
    text-align: center;
    .num {
      font-size: 26px;
    }
  }
}

@media (max-width: 580px) {
  .bg {
    flex-direction: column;
  }
}
</style>
