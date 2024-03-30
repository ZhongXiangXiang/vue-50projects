<template>
  <div class="bg">
    <div class="card">
      <div class="img" :class="[showPlaceHolder ? 'animated-bg' : '']">
        <img v-if="info.srcOne" :src="info.srcOne" alt="" />
      </div>

      <div class="info">
        <h2 class="title" :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']">
          {{ info.title }}
        </h2>
        <p class="excerpt">
          <template v-if="info.excerpt">
            {{ info.excerpt }}
          </template>
          <template v-else>
            <span :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']">&nbsp;</span>
            <span :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']">&nbsp;</span>
            <span :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']">&nbsp;</span>
          </template>
        </p>

        <div class="author">
          <div class="profile" :class="[showPlaceHolder ? 'animated-bg' : '']">
            <img v-if="info.srcOne" :src="info.srcOne" alt="" />
          </div>
          <div class="author-info">
            <strong class="name" :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']">
              {{ info.name }}
            </strong>
            <small class="date" :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']">{{
              info.date
            }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const showPlaceHolder = ref(true)

const info = reactive<{ [prop: string]: string }>({
  srcOne: '',
  srcTwo: '',
  title: '',
  excerpt: '',
  name: '',
  date: ''
})

onMounted(() => {
  setTimeout(() => {
    getData()
  }, 2500)
})

function getData() {
  showPlaceHolder.value = false
  info.srcOne = 'src/assets/imgs/childhood.jpg'
  info.title = 'Lorem ipsum dolor sit amet'
  info.excerpt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  info.name = 'Mocheng'
  info.date = '2022/10/27'
}
</script>


<style lang="less" scoped>
.bg {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 350px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  .img {
    height: 200px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    padding: 30px;
    .excerpt {
      color: #777;
      margin: 10px 0 20px;
    }

    .author {
      display: flex;
      align-items: center;
      .profile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          height: 100%;
        }
      }

      .author-info {
        display: flex;
        flex-direction: column;
        width: 100px;
        margin-left: 10px;
        .name {
        }
        small {
          color: #aaa;
          margin-top: 5px;
        }
      }
    }
  }
}

.animated-bg {
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -100% 0;
  }
}
</style>
