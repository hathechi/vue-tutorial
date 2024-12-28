<template>
  <div class="border rounded shadow m-1.5 p-2 hover:scale-105 transition-all cursor-pointer">
    <div class="rounded" @click="handleClickImage">
      <img class="w-full h-52 rounded object-cover"
           :src="data.image??'https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg'"
           alt="Image" />
    </div>
    <slot name="list-img" />

    <h4 class="">{{ data.name }}</h4>
    <h4>{{ formatMonney(data.price) }}</h4>
    <button class="rounded bg-amber-100 shadow w-full py-3 hover:bg-black mt-3 hover:text-white transition-all"
            @click="handerAddCart(data)">Thêm vào giỏ hàng
    </button>
  </div>
</template>
<script setup lang="ts">
import type { ProductType } from '@/types/Product'

import formatMonney from '@/utils/formatMoney'


const emit = defineEmits<{ handleClickImage: [string] }>()

const handleClickImage = () => {
  emit('handleClickImage', 'Tôi vừa click vào hình ảnh')
}
defineProps<{ data: ProductType; handerAddCart: (item: ProductType) => void }>()
</script>
