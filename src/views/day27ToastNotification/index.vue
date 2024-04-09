<template>
  <div class="bg">
    <div id="toasts"></div>
    <div class="btns">
      <button class="btn info" @click="createNotification(null, NOTIFICATION_TYPE.INFO)">
        Show Info Notification
      </button>
      <button class="btn success" @click="createNotification(null, NOTIFICATION_TYPE.SUCCESS)">
        Show Success Notification
      </button>
      <button class="btn error" @click="createNotification(null, NOTIFICATION_TYPE.ERROR)">
        Show Error Notification
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const NOTIFICATION_TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}
const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

function createNotification(message: any, type: string) {
  const toasts = document.getElementById('toasts')
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type)

  notif.textContent = message || getRandomMessage()

  toasts?.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
</script>

<style lang="less" scoped>
@info-color: rebeccapurple;
@success-color: green;
@error-color: red;

.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  background: @info-color;
  position: relative;
  .btns {
    display: flex;
  }
  .btn {
    padding: 1rem;
    margin: 0 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    &:active {
      transform: scale(0.98);
    }
    &.info {
      color: @info-color;
    }
    &.success {
      color: @success-color;
    }
    &.error {
      color: @error-color;
    }
  }

  #toasts {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // style加了scoped，会给每一个标签加一个唯一attribute，如data-v-5954c100
    // 后面手动插入的元素，不会带该attribute，要使样式生效，需要使用深度作用选择器deep
    :deep(.toast) {
      background-color: #fff;
      border-radius: 5px;
      padding: 1rem 2rem;
      margin: 0.5rem;
      &.info {
        color: @info-color;
      }
      &.success {
        color: @success-color;
      }
      &.error {
        color: @error-color;
      }
    }
  }
}
</style>
