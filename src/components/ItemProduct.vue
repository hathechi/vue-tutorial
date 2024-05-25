<template>
  <div class="item-product">
    <div class="div-img">
      <img class="img" :src="data.image" alt="Image" />
    </div>
    <slot name="list-img" />

    <h4 class="title">{{ data.name }}</h4>
    <h4>{{ formatMonney(data.price) }}</h4>
    <button class="btn border my-3" @click="handerAddCart(data)">Thêm vào giỏ hàng</button>
  </div>
</template>
<script setup lang="ts">
import type { ProductType } from '@/types/Product'

import formatMonney from '@/utils/formatMoney'
defineProps<{ data: ProductType; handerAddCart: (item: ProductType) => void }>()
</script>
