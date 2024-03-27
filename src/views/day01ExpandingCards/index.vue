<template>
  <div class="container">
    <div
      class="panel"
      :class="{ active: item.active }"
      v-for="(item, index) in cardList"
      :key="index"
      :style="{ backgroundImage: `url(${item.url})` }"
      @click="toggleActive(index)"
    >
      <h3>{{ item.title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const cardList = reactive<{ [prop: string]: any }[]>([
  {
    title: 'Explore The World',
    active: true,
    url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Wild Forest',
    active: false,
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Sunny Beach',
    active: false,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  },
  {
    title: 'City on Winter',
    active: false,
    url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    title: 'Mountains - Clouds',
    active: false,
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
])

function toggleActive(index: number) {
  cardList.forEach((item, i) => {
    item.active = i === index
  })
}

// onMounted(() => {
//   const panels: Array<Element> = document.querySelectorAll('.panel')
//   panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//       console.log('click..')
//       removeActiveClasses(panels)
//       panel.classList.add('active')
//     })
//   })
// })

function removeActiveClasses(els: Array<Element>) {
  els.forEach((panel) => {
    panel.classList.remove('active')
  })
}
</script>


<style lang="less" scoped>
.container {
  display: flex;
  align-content: center;
  .panel {
    color: #fff;
    height: 70vh;
    border-radius: 50px;
    flex: 1;
    // -webkit-transition: all 700ms ease-in;
    transition: all 700ms ease-in;

    margin: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;

    &.active {
      flex: 5;
      h3 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
      }
    }

    h3 {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-size: 24px;
      opacity: 0;
    }
  }
}

@media (max-width: 480px) {
  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>