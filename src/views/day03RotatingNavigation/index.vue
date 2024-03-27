<template>
  <div class="container">
    <div class="circle-container" :class="{ active: isActive }">
      <div class="btn close" @click="toggleActive">
        <div class="txt">close</div>
      </div>
      <div class="btn open" @click="toggleActive">
        <div class="txt">open</div>
      </div>
    </div>
    <div class="content-container" :class="{ active: isActive }">
      <h1>hhhh</h1>
      <div>aaaabbb</div>
    </div>

    <div class="navigation" :class="{ active: isActive }">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
function toggleActive() {
  isActive.value = !isActive.value
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  // height: 80vh;
  overflow: hidden;
  .circle-container {
    width: 100px;
    height: 100px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: orange;
    position: absolute;
    top: -50px;
    left: -50px;
    display: flex;
    justify-content: space-around;
    color: #fff;
    z-index: 10;
    transition: transform 0.4s;
    .btn {
      flex: 1;
    }
    .txt {
      position: absolute;
      bottom: 20px;
    }
    .close {
      .txt {
        transform: rotate(90deg) translate(4px, -16px);
      }
    }
    &.active {
      transform: rotate(-90deg);
    }
  }

  .content-container {
    padding: 20px 40px;
    height: 80vh;
    transform-origin: top left;
    transition: transform 0.4s;
    // background: #fff;
    &.active {
      transform: rotate(-20deg);
    }
  }

  .navigation {
    background-color: gray;
    position: absolute;
    left: -240px;
    top: 0;
    height: 900px;
    width: 240px;
    transform-origin: top left;
    transition: transform 0.4s;
    &.active {
      transform: rotate(-20deg);
      ul {
        left: 100px;
      }
    }
    ul {
      transform: rotate(20deg);
      position: absolute;
      top: 600px;
      transition: all 0.4s ease-in;
    }
  }
}
</style>
