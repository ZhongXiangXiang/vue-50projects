<template>
  <div class="toast" :style="{ top }" v-if="isShow">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref } from 'vue'

defineOptions({
  name: 'myToast'
})

const props = defineProps({
  text: {
    type: String,
    default: ''
  },

  getVmLen: {
    type: Function,
    default: (): number => 0
  },
  create: {
    type: Function,
    default: (): void => {}
  },
  destroy: {
    type: Function,
    default: (): void => {}
  }
})

const isShow = ref(true)

props.create()
const top = ref(`${props.getVmLen() * 68 + 20}px`)

setTimeout(() => {
  console.log(22, props.getVmLen())
  props.destroy()
  isShow.value = false
}, 2000)
</script>

<style lang="less" scoped>
// .toast {
//   position: relative;
//   left: 200px;
//   bottom: 90vh;
//   width: 200px;
//   padding: 10px 20px;
//   background: yellow;
//   border-radius: 10px;
//   margin: 10px;
// }

.toast {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 200px;
  padding: 10px 20px;
  background: yellow;
  border-radius: 10px;
  margin: 10px;
}
</style>