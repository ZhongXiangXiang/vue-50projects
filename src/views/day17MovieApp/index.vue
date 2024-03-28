<template>
  <div class="bg">
    <div class="search">
      <input type="text" v-model="keywrod" placeholder="Search" @keyup="handleSearch" />
    </div>

    <div class="container">
      <div class="movie" v-for="(item, index) in movieList" :key="index">
        <div
          class="img"
          :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280${item.poster_path}')` }"
        ></div>
        <div class="info">
          <h3 class="title">{{ item.original_title }}</h3>
          <div class="rate" :class="{ green: item.vote_average >= 8, red: item.vote_average < 5 }">
            {{ item.vote_average }}
          </div>
        </div>
        <div class="overview">
          <h2>Overview</h2>
          <p>{{ item.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getMovies, getMoviesByKeyword } from '@/api/http'
// import { getMovies, MovieParams } from '@/api/http'
import { ref } from 'vue'

const movieList = ref<any[]>([])

interface MovieParams {
  sort_by?: string // sort_by=popularity.desc
  page?: number
  query?: string
}

getMovieList({ page: 1 })

async function getMovieList(params: MovieParams) {
  const res = await getMovies(params)
  movieList.value = res.results
}

const keywrod = ref('')
async function handleSearch(e: KeyboardEvent) {
  if (e.code === 'Enter') {
    const res = await getMoviesByKeyword({ query: keywrod.value })
    movieList.value = res.results
  }
}
</script>

<style lang="less" scoped>
@primary-color: #22254b;
@secondary-color: #373b69;

.bg {
  background: @primary-color;
}

.search {
  width: 100%;
  height: 100px;
  background: @secondary-color;
  position: relative;

  input {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 50px;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 20px;
    outline: none;
    background-color: transparent;
    color: #fff;
    &::placeholder {
      color: #7378c5;
    }
    &:focus {
      background: @primary-color;
      border: none;
    }
  }
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: calc(100% - 100px);
  overflow: auto;
  .movie {
    position: relative;
    width: 250px;
    height: 400px;
    margin: 10px;
    border-radius: 6px;
    overflow: hidden; // 有radius，图片的角隐藏
    background: @secondary-color;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    .img {
      width: 100%;
      flex: 1;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      gap: 0.2rem;
      letter-spacing: 0.5px;
      .title {
        font-weight: 26px;
        color: #fff;
        font-weight: bold;
        // padding-right: 10px;
      }
      .rate {
        background: @primary-color;
        padding: 0 10px;
        border-radius: 6px;
        line-height: 30px;
        height: 30px;
        color: orange;
        font-size: 20px;
        &.green {
          color: lightgreen;
        }
        &.red {
          color: red;
        }
      }
    }

    .overview {
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(100%);
      padding: 30px 20px 20px;
      transition: transform 0.4s linear;
      max-height: 100%;
      overflow-y: auto;
      h2 {
        font-weight: bold;
        padding-bottom: 10px;
      }
    }

    &:hover {
      .overview {
        transform: translateY(0);
      }
    }
  }
}
</style>