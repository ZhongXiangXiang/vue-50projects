<template>
  <div class="bg">
    <h1>Frequently Asked Questions</h1>
    <div v-for="(item, index) in qaList" :key="index" class="box" :class="{ active: item.active }">
      <div class="question">{{ item.question }}</div>
      <div class="answer">{{ item.answer }}</div>
      <div class="icon" @click="handleToggle(index)">?</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const qaList = ref([
  { question: "Why shouldn't we trust atoms?", answer: 'they make up everything', active: true },
  {
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows.',
    active: false
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: 'Inheritance',
    active: false
  },
  {
    question: 'How many tickles does it take to tickle an octopus?',
    answer: 'Ten-tickles',
    active: false
  },
  { question: 'What is: 1 + 1?', answer: 'Depending on who are you asking', active: false }
])

function handleToggle(index: number) {
  qaList.value[index].active = !qaList.value[index].active
}
</script>

<style lang="less" scoped>
.bg {
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  overflow-y: scroll;
}
.box {
  min-width: 600px;
  padding: 30px;
  border: 1px solid #999;
  font-size: 20px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
  transition: all 0.3s;
  font-size: 20px;
  // overflow: hidden;
  transition: all 0.3s;

  .answer {
    font-size: 16px;
    display: none;
    margin-top: 20px;
  }
  &.active {
    box-shadow: 2px 6px 16px rgba(0, 0, 0, 0.3);
    background: #fff;
    .answer {
      display: block;
    }
  }
  &.active::before,
  &.active::after {
    font-family: 'Font Awesome 5 Free';
    font-size: 7rem;
    position: absolute;
    opacity: 0.2;
  }
  &.active::before {
    content: 'Q';
    color: #3498db;
    top: -10px;
    left: -30px;
  }
  &.active::after {
    content: 'A';
    color: #2ecc71;
    top: 20px;
    left: 20px;
  }

  .icon {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background: yellow;
    text-align: center;
  }
}
</style>