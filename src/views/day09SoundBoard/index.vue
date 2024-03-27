<template>
  <div class="bg">
    <div class="container">
      <audio v-for="(audio, index) in audioList" :key="index" :id="audio.id" controls hidden>
        <source :src="audio.src" type="audio/mpeg" />
      </audio>
      <!-- <audio src="../../assets/audios/boo.mp3" ref="soundApplouse"></audio> -->

      <button v-for="(audio, index) in audioList" :key="index" @click="handlePlay(audio)">
        {{ audio.id }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Audio {
  id: string
  src: string
}
const audioList = ref<Audio[]>([
  { id: 'applouse', src: 'src/assets/audios/applause.mp3' },
  { id: 'boo', src: 'src/assets/audios/boo.mp3' },
  { id: 'gasp', src: 'src/assets/audios/gasp.mp3' },
  { id: 'tada', src: 'src/assets/audios/tada.mp3' },
  { id: 'victory', src: 'src/assets/audios/victory.mp3' },
  { id: 'wrong', src: 'src/assets/audios/wrong.mp3' }
])

function handlePlay(audio: Audio) {
  stopPlay()
  ;(document.getElementById(audio.id) as HTMLMediaElement).play()
}
function stopPlay() {
  audioList.value.forEach((audio) => {
    const audioEl = document.getElementById(audio.id) as HTMLMediaElement
    audioEl.pause()
    audioEl.currentTime = 0
  })
}
</script>

<style lang="less" scoped>
.bg {
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    min-width: 100px;
    padding: 15px 20px;
    background-color: rebeccapurple;
    border: 0;
    margin: 1rem;
    cursor: pointer;
    color: #fff;
    border-radius: 6px;
    font-size: 20px;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      transform: scale(0.98);
    }
  }
}
</style>