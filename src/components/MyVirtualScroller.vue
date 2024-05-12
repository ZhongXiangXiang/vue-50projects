<template>
  <div class="my-recycle-container" ref="container" @scroll="setPool">
    <div class="my-recycle-wrapper" :style="{height: totalSize}">
      <div v-for="poolItem in pool" :key="poolItem[props.keyField]" class="my-recycle-item" :style="{transform: `translateY(${poolItem.position}px)`}">
        <slot :item="poolItem.item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue';

const props = defineProps({
  // 数据列表
  items: {
    type: Array,
    default: (): any[] => []
  },
  // 每条数据高度
  itemSize: {
    type: Number,
    default: 50
  },
  // items中的唯一标识作为key
  keyField: {
    type: String,
    default: 'id'
  }
})

interface PoolItem {
  [key: string]: any
  id: number
  name: string
  item: any
  position: string
}
const pool = ref<PoolItem[]>([]) // 被渲染的列表内容
const totalSize = computed(() => props.items.length * props.itemSize + 'px')

onMounted(() => {
  setPool()
})

onUpdated(() => {
  console.log('updated..')
})
const container = ref()
function setPool() {
  const scrollTop = container.value.scrollTop
  const clientHeight = container.value.clientHeight

  let startIndex = Math.floor(scrollTop / props.itemSize) || 0
  let endIndex = Math.ceil((scrollTop + clientHeight) / props.itemSize)
  const startPosition = startIndex * props.itemSize

  // 每次都重新计算item对应的位置
  pool.value = props.items.slice(startIndex, endIndex).map((item, index) => {
    return {
      ...item,
      item,
      position: startPosition + props.itemSize * index
    }
  })
  console.log('setpool', pool.value, pool.value[0][props.keyField])
}
</script>

<style lang="less">
.my-recycle-container {
  overflow: auto;
  .my-recycle-wrapper {
    position: relative;
    .my-recycle-item {
      position: absolute;
      width: 100%;
      top: 20px;
      left: 0;
    }
  }
}
</style>