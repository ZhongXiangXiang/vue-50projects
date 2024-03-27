<template>
  <div class="bg">
    <div class="container">
      <h2 class="title">Dont laugh challenge</h2>
      <p class="text">{{ currentJoke }}</p>
      <button class="btn" @click="getAnotherJoke">Get Another Joke</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getJoke } from '@/api/http'
// import { getJoke } from '../../api/http'

const currentJoke = ref('// Joke goes here')

onMounted(() => {
  getAnotherJoke()
})
async function getAnotherJoke() {
  const res: any = await getJoke()
  currentJoke.value = res.joke
}
</script>


<style lang="less" scoped>
.bg {
  background-color: lightblue;

  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 30px;
  width: fit-content;
  text-align: center;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  .title {
    // color: #999;
    opacity: 0.5;
    letter-spacing: 2px;
  }
  .text {
    max-width: 500px;
    font-size: 26px;
    padding: 20px 0;
    letter-spacing: 1px;
  }
  .btn {
    border: none;
    background-color: rebeccapurple;
    border-radius: 6px;
    padding: 1rem 2rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
