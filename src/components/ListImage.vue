<template>
  <div class="w-full my-3">
    <div class="flex gap-2 overflow-auto">
      <img
        v-for="(img, index) in props.images"
        :key="index"
        class="w-1/3 h-[80px] object-cover rounded shadow "
        :src="img"
        alt="Small img"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ images: string[] }>()
</script>
