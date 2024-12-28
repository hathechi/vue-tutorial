<template>
  <div class=" flex my-2 w-full ">
    <div class="w-1/5">
      <div class="h-full">
        <img class="h-[80px] w-[80px] object-cover rounded" :src="data.image" alt="Image" />
      </div>
    </div>
    <div class="w-4/5 flex justify-between">
      <div class="h-100 h-full">
        <h6 class="">{{ data.name }}</h6>
        <h6>{{ formatPrice(data.price) }}</h6>
      </div>
      <div class="">
        <button @click="handleRemoveCart(index)"
          class="border rounded py-2 px-3 bg-black text-white hover:bg-gray-700">Xóa</button>
      </div>
    </div>
  </div>
  <hr />
</template>
<script setup lang="ts">
import type { ProductType } from '@/types/Product'
import formatPrice from '@/utils/formatMoney'

defineProps<{ data: ProductType; handleRemoveCart: (index: number) => void; index: number }>()
</script>
