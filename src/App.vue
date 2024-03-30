<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <div class="menu-list">
      <RouterLink to="/expanding-cards">expanding cards</RouterLink>
      <RouterLink to="/progress-steps">progress-steps</RouterLink>
      <RouterLink to="/rotating-navigation">rotating-navigation</RouterLink>
      <RouterLink to="/hidden-search">hidden-search</RouterLink>
      <RouterLink to="/blury-loading">blury-loading</RouterLink>
      <RouterLink to="/scroll-animation">scroll-animation</RouterLink>
      <RouterLink to="/split-landing-page">split-landing-page</RouterLink>
      <RouterLink to="/form-wave">form-wave</RouterLink>
      <RouterLink to="/sound-board">sound-board</RouterLink>
      <RouterLink to="/dad-jokes">dad-jokes</RouterLink>
      <RouterLink to="/event-keycodes">event-keycodes</RouterLink>
      <RouterLink to="/faq-collapse">faq-collapse</RouterLink>
      <RouterLink to="/random-choice-picker">random-choice-picker</RouterLink>
      <RouterLink to="/animation-navigation">animation-navigation</RouterLink>
      <RouterLink to="/incrementing-counter">incrementing-counter</RouterLink>
      <RouterLink to="/drink-water">drink-water</RouterLink>
      <RouterLink to="/movie-app">movie-app</RouterLink>
      <RouterLink to="/background-slider">background-slider [undone]</RouterLink>
      <RouterLink to="/theme-clock">theme-clock</RouterLink>
      <RouterLink to="/button-ripple-effect">button-ripple-effect</RouterLink>
      <RouterLink to="/drag-n-drop">drag-n-drop</RouterLink>
      <RouterLink to="/drawing-app">drawing-app</RouterLink>
      <RouterLink to="/kinetic-loader">kinetic-loader</RouterLink>
      <RouterLink to="/content-placeholder">content-placeholder</RouterLink>
    </div>

    <RouterView class="content-wrapper" />
  </div>
</template>

<style lang="less" scoped>
.app-container {
  display: flex;
  height: 90vh;
  overflow: hidden;
}
.menu-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 20px;
}
.content-wrapper {
  width: 90vw;
  margin-left: 20px;
}
</style>
