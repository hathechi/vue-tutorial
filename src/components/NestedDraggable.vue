<template>
  <div>
    <draggable class="dragArea" tag="ul" :list="list"  group="g1">
      <li v-for="el in list" :key="el.name">
        <p>{{ el.name }}</p>
      </li>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext as Draggable } from 'vue-draggable-next'

defineProps<{
  list: string[]
}>()
</script>
