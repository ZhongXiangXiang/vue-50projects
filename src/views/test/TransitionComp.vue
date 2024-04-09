<template>
  <div class="transition-comp">
    <button @click="handleToggle">toggle</button>
    <transition name="fade" @transitionend="handleTransitionEnd">
      <div v-if="isShow" class="content">hello</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(true)
function handleToggle() {
  isShow.value = !isShow.value
}

function handleTransitionEnd() {
  console.log(3333)
}
</script>

<style lang="less" scoped>
.transition-comp {
  margin: 10px;
}
.content {
  width: 100px;
  padding: 10px;
  background: lightblue;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.5s ease;
// }

// 进入和离开动画
// 可以用不同持续时间和速度曲线
.fade-enter-active {
  transition: all 0.3s ease-out;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  // transform: translateX(20px);

  transform: translateY(-100%);
  opacity: 0;
}
</style>
