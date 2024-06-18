<template>
  <div class="flex items-start gap-2  ">
    <h3 class="inline-flex flex-col justify-center items-center">{{ days }} <span>Ngày</span></h3>
    <h3 class="inline-block">:</h3>
    <h3 class="inline-flex flex-col justify-center items-center">{{ hours }} <span>Giờ</span></h3>
    <h3 class="inline-block">:</h3>
    <h3 class="inline-flex flex-col justify-center items-center">{{ minutes }} <span>Phút</span></h3>
    <h3 class="inline-block">:</h3>
    <h3 class="inline-flex flex-col justify-center items-center">{{ seconds }} <span>Giây</span></h3>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import moment from 'moment'

const props = defineProps<{ dayEnd: string }>()

let days = ref(0)
let hours = ref(0)
let minutes = ref(0)
let seconds = ref(0)

function updateCountdown() {
  const now = moment()
  const end = moment(props.dayEnd)
  const duration = moment.duration(end.diff(now))

  days.value = Math.floor(duration.asDays())
  hours.value = duration.hours()
  minutes.value = duration.minutes()
  seconds.value = duration.seconds()
}

onMounted(() => {
  updateCountdown()

  setInterval(updateCountdown, 1000)
})
</script>

<style>
</style>
