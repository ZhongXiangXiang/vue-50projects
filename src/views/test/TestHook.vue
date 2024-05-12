<template>
  <div>
    <h3>useMouse</h3>
    <p>mouse position is at: {{ x }}, {{ y }}</p>
    <div class="drag-box" :style="style1">
      <div ref="drayItem1">点击我拖动</div>
      <div>我拖不动</div>
    </div>
    <div class="drag-box2" :style="style2">
      <div ref="drayItem2">
        @vueuse/core 拖动
        <div>i am at {{ x2 }}, {{ y2 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useMouse } from '@/hooks/useMouse'
import { useDraggable as useMyDraggable } from '@/hooks/useDraggable'
import { useDraggable } from '@vueuse/core'

const { x, y } = useMouse()
console.log('test hook', x, y)

const drayItem1 = ref<HTMLElement | null>(null)

const { style: style1 } = useMyDraggable(drayItem1, {}) as { style: Ref<string> }

const drayItem2 = ref<HTMLElement | null>(null)
const {
  x: x2,
  y: y2,
  style: style2
} = useDraggable(drayItem2, {
  initialValue: {
    x: 40,
    y: 40
  }
})
</script>

<style lang="less" scoped>
.drag-box {
  width: 200px;
  border: 1px solid red;
  position: absolute;
  background-color: red;
  top: 20px;
  color: #fff;
}

.drag-box2 {
  width: 100px;
  border: 1px solid yellow;
  background-color: lightblue;
  position: fixed;
  color: #fff;
  top: 50px;
}
</style>
