<template>
  <div class="wrapper">
    <div class="container" :class="{ active: isActive }">
      <div class="circle-container">
        <div class="circle" @click="toggleActive">
          <button class="close"><i class="fas fa-times"></i>close</button>
          <button class="open">open</button>
        </div>
      </div>

      <div class="content-container">
        <h1>hhhh</h1>
        <div>aaaabbb</div>
      </div>
    </div>

    <nav>
      <ul>
        <li><i class="fas fa-home"></i><a href="#"> Home</a></li>
        <li><i class="fas fa-user-alt"></i><a href="#"> About</a></li>
        <li><i class="fas fa-envelope"></i><a href="#"> Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
function toggleActive() {
  isActive.value = !isActive.value
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
</style>
<style lang="less" scoped>
// @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
.wrapper {
  background-color: #222;
  overflow-x: hidden;
  position: relative;
}

.container {
  background: #fafafa;
  position: relative;
  width: 100%;
  transform-origin: top left;
  transition: transform 0.5s linear;

  &.active {
    transform: rotate(-20deg);
    .circle {
      transform: rotate(-70deg);
    }
    & + nav ul li {
      transform: translateX(0);
      transition-delay: 0.3s;
    }
  }
  .circle-container {
    position: absolute;
    top: -100px;
    left: -100px;
    .circle {
      background-color: #ff7979;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      position: relative;
      transition: transform 0.5s linear;
      button {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100px;
        background: transparent;
        border: 0;
        font-size: 26px;
        color: #fff;
        &.open {
          left: 60%;
        }
        &.close {
          top: 60%;
          transform: rotate(90deg);
          transform-origin: top left;
        }
      }
    }
  }

  .content-container {
    margin-left: 50px;
    padding: 50px 40px;
    min-height: 90vh;
    transform-origin: top left;
    transition: transform 0.4s;
  }
}

nav {
  position: absolute;
  left: 0;
  bottom: 40px;
  z-index: 100;
  ul {
    list-style-type: none;
    padding-left: 30px;
  }
  ul li {
    text-transform: uppercase;
    color: #fff;
    margin: 40px 0;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in;
    i {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  ul li + li {
    margin-left: 15px;
    transform: translateX(-150%);
  }
  ul li + li + li {
    margin-left: 30px;
    transform: translateX(-200%);
  }
  a {
    color: #fafafa;
    text-decoration: none;
    transition: all 0.5s;
    &:hover {
      color: #ff7979;
      font-weight: bold;
    }
  }
}
</style>
