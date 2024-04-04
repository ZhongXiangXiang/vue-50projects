<template>
  <div class="bg" @scroll="handleScroll">
    <nav class="nav" ref="navRef" :class="{ active: isActive }">
      <h1 class="left menu">My Website</h1>
      <div class="right">
        <span class="menu">Home</span>
        <span class="menu">About</span>
        <span class="menu">Services</span>
        <span class="menu">Contact</span>
      </div>
    </nav>
    <div class="hero">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
      </div>
    </div>

    <section class="container content">
      <h2>Content One</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet
        tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil
        recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam!
        Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit
        architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo
        perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore,
        placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae
        excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati
        minus odio eligendi!
      </p>

      <h3>Content Two</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum
        possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio!
        Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a
        sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam
        hic cumque repellat?
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navRef = ref(null)
const isActive = ref(false)
function handleScroll(e) {
  console.log(
    88,
    e,
    e.target.clientHeight, // 元素高度，包括padding
    e.target.offsetHeight, // 元素高度，包括padding, border, 水平滚动条

    e.target.offsetTop, // 与滚动无关，当前元素距最近父元素顶部的距离

    e.target.scrollHeight, // 正文全文高
    e.target.scrollTop, // 正文被滚动的高度，只有该属性随滚动变化

    navRef.value,
    navRef.value.clientHeight,
    navRef.value.offsetHeight,

    window.scrollY
  )

  isActive.value = e.target.scrollTop > navRef.value.offsetHeight + 150
}
</script>

<style lang="less" scoped>
.bg {
  overflow: auto;
  // 相对自己原来的位置
  // position: relative;
}
.nav {
  // 相对于视口
  // position: fixed;

  // 相对于离得最近的有滚动机制的祖先元素
  // 定位属性必须声明一个定位才能生效，最常用的是top值
  position: sticky;
  top: 0;

  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  .menu {
    padding: 0 10px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: red;
    }
  }

  &.active {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    color: #000;
    padding: 10px 0;
  }
}
.hero {
  width: 100%;
  height: 90vh;
  background-image: url('@/assets/imgs/childhood.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: -2;
  // margin-bottom: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  h1 {
    font-size: 46px;
    margin: -20px 0 20px;
  }
  p {
    font-size: 20px;
    letter-spacing: 1px;
  }
}

.content {
  h2,
  h3 {
    font-size: 150%;
    margin: 20px 0;
  }

  p {
    color: #555;
    line-height: 30px;
    letter-spacing: 1.2px;
  }
}
</style>