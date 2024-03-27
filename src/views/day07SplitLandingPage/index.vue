<template>
  <div
    class="container"
    :class="{ 'hover-left': toggle === 'left', 'hover-right': toggle === 'right' }"
  >
    <div class="split left" @mouseenter="handleToggle('left')" @mouseleave="handleToggle('')">
      <h1>left</h1>
      <button>Buy now</button>
    </div>
    <div class="split right" @mouseenter="handleToggle('right')" @mouseleave="handleToggle('')">
      <h1>right</h1>
      <button>Buy now</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'

const toggle = ref('')
function handleToggle(direction: string) {
  toggle.value = direction
}

// const container = shallowRef<HTMLDivElement | null>(null)
// const left = shallowRef<HTMLDivElement | null>(null)
// const right = shallowRef<HTMLDivElement | null>(null)

// onMounted(() => {
//   ;(left.value as HTMLDivElement).addEventListener('mouseenter', () =>
//     (container.value as HTMLDivElement).classList.add('hover-left')
//   )
//   ;(left.value as HTMLDivElement).addEventListener('mouseleave', () =>
//     (container.value as HTMLDivElement).classList.remove('hover-left')
//   )
//   ;(right.value as HTMLDivElement).addEventListener('mouseenter', () =>
//     (container.value as HTMLDivElement).classList.add('hover-right')
//   )
//   ;(right.value as HTMLDivElement).addEventListener('mouseleave', () =>
//     (container.value as HTMLDivElement).classList.remove('hover-right')
//   )
// })
</script>

<style lang="less" scoped>
@hover-width: 75%;
@other-width: 25%;
@speed: 1000ms;
.container {
  position: relative;
  height: 100%;
  .split {
    position: absolute;
    width: 50%;
    height: 100%;
    transition: all @speed ease-in-out;
  }
  .left {
    left: 0;
    background: url('@/assets/imgs/四驱兄弟.png') no-repeat;
    background-size: cover;
  }
  .right {
    right: 0;
    background: url('@/assets/imgs/childhood.jpg') no-repeat;
    background-size: cover;
  }

  &.hover-left {
    .left {
      width: @hover-width;
    }
    .right {
      width: @other-width;
    }
  }
  &.hover-right {
    .left {
      width: @other-width;
    }
    .right {
      width: @hover-width;
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
  }
  button {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    background: transparent;
    border: 6px solid #fff;
    width: 15rem;
    padding: 1.5rem;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 40%;
    cursor: pointer;
    &:hover {
      background-color: green;
      border-color: green;
    }
  }
  .left button:hover {
    background-color: purple;
    border-color: purple;
  }
}

@media (max-width: 800px) {
  .container {
    h1 {
      font-size: 2rem;
      top: 30%;
      color: red;
    }
    button {
      padding: 1.2rem;
      width: 12rem;
    }
  }
}
</style>