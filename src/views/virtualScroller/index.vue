<template>
  <div class="wrapper">hh
    <!-- <RecycleScroller
      class="scroller"
      :items="list"
      :item-size="32"
      key-field="id"
      v-slot="{item}"
    >
      <div class="user">
        {{ item.name }}
      </div>
    </RecycleScroller> -->

  <MyVirtualScroller class="scroller"
      :items="list"
      :item-size="32"
      key-field="id"
      v-slot="{item}">
    <div class="user">
        {{ item.name }}
      </div>
  </MyVirtualScroller>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyVirtualScroller from '@/components/MyVirtualScroller.vue';

let arr = []
for (let i = 0; i < 10000; i++) {
  arr.push({
    id: i,
    name: 'name' + i
  })
}
const list = ref(arr)
</script>

<style lang="less">
.wrapper {
  height: 500px;
  // overflow: auto;
}

.scroller {
  height: 100%;
}
</style>