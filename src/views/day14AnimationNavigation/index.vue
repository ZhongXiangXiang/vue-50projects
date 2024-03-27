<template>
  <div class="container">
    <div class="box" :class="{ active: active }">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button class="icon" @click="handleToggle">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(true)
function handleToggle() {
  active.value = !active.value
}
</script>


<style lang="less" scoped>
.container {
  position: relative;
  background-image: linear-gradient(to bottom, #eafbff 0%, #eafbff 50%, #5290f9 50%, #5290f9 100%);
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.6s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow-x: hidden;

  &.active {
    width: 350px;
    ul {
      width: 100%;
      li {
        opacity: 1;
        transform: rotateY(360deg);
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
    width: 0;
    li {
      transform: rotateY(0deg);
      opacity: 0;
      transition: all 0.6s linear;
    }
    a {
      color: #000;
      text-decoration: none;
      margin: 0 10px;
    }
  }

  .icon {
    background-color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    position: relative;
    .line {
      background: #5290f9;
      width: 20px;
      height: 2px;
      position: absolute;
      top: 10px;
      left: 5px;
      transition: transform 0.6s linear;
      &.line2 {
        top: auto;
        bottom: 10px;
      }
    }
  }

  &.active .icon {
    .line1 {
      transform: rotate(-765deg) translateY(5.5px);
    }
    .line2 {
      transform: rotate(765deg) translateY(-5.5px);
    }
  }
}
</style>