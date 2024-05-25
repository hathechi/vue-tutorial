<template>
  <div>
    <GameShow :arr="arr" :gift="gift" :callBack="toast" :duration="3000" />
  </div>
</template>
<script setup lang="ts">
import GameShow from '@/components/GameShow.vue'

const arr: Array<string> = ['option1', 'option2', 'option3', 'option4', 'ad', 'asd']
const gift: string = 'Car'
function toast(message: string) {
  console.log('thong bao tra ve', message)
  alert(message)
}
</script>
