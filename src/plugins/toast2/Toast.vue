<template>
  <!-- <div class="toast animate__animated animate__fadeInDown" :class="[type]"> -->
  <div class="toast" :class="[type]">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'myToast2'
})

defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  }
})
</script>

<style lang="less" scoped>
@info-color: rebeccapurple;
@success-color: green;
@error-color: red;

.toast {
  color: #fff;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0.5rem;
  background-color: @info-color;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
  animation: myFadeInDown 1s;
  &.info {
    background-color: @info-color;
  }
  &.success {
    background-color: @success-color;
  }
  &.error {
    background-color: @error-color;
  }
}

@keyframes myFadeInDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
