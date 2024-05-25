<template>
  <div class="scroll-list-img">
    <div class="div-arr-img">
      <img
        v-for="(img, index) in props.images"
        :key="index"
        class="small-img-list"
        :src="img"
        alt="Small img"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ images: string[] }>()
</script>
