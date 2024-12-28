<template>
  <div>
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    <button @click="startSpin(props.duration)">Quay</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const props = defineProps<{
  arr: string[]
  gift: string
  callBack: (message: string) => void
  duration: number
}>()

const canvasWidth = 500
const canvasHeight = 500
const canvas = ref<HTMLCanvasElement | null>(null)

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

let rotationAngle = 0
const isSpinning = ref(false)

const drawWheel = () => {
  if (!canvas.value) return

  const ctx = canvas.value.getContext('2d')
  if (!ctx) return

  const centerX = canvasWidth / 2
  const centerY = canvasHeight / 2
  const radius = Math.min(canvasWidth, canvasHeight) / 2
  const arcSize = (2 * Math.PI) / props.arr.length

  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  ctx.save()
  ctx.translate(centerX, centerY)
  ctx.rotate(rotationAngle)
  ctx.translate(-centerX, -centerY)

  props.arr.forEach((option, index) => {
    const startAngle = index * arcSize
    const endAngle = startAngle + arcSize
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fillStyle = getRandomColor()
    ctx.fill()
    ctx.stroke()

    // Draw text
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate(startAngle + arcSize / 2)
    ctx.textAlign = 'right'
    ctx.fillStyle = 'white'
    ctx.font = '16px Arial'
    ctx.fillText(option, radius - 10, 10)
    ctx.restore()
  })

  ctx.restore()
}

const startSpin = (duration: number) => {
  if (isSpinning.value) return
  isSpinning.value = true
  const start = performance.now()
  const spin = (time: number) => {
    const elapsed = time - start
    if (elapsed < duration) {
      rotationAngle += (Math.PI / 180) * (elapsed / duration) * 360 // Speed up initially
      drawWheel()
      requestAnimationFrame(spin)
    } else {
      rotationAngle += (Math.PI / 180) * 360 // Final full rotation
      drawWheel()
      isSpinning.value = false
      props.callBack('THoong baos tra lai')
    }
  }
  requestAnimationFrame(spin)
}

onMounted(drawWheel)
watch(() => props.arr, drawWheel)
</script>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
