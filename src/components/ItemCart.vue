<template>
  <div class="row position-relative relative flex my-2 ">
    <div class="col-2 w-2/6">
      <div class="h-100 px-2">
        <img class="img" :src="data.image" alt="Image" />
      </div>
    </div>
    <div class="col-10 w-4/6">
      <div class="h-100 h-full">
        <h6 class="">{{ data.name }}</h6>
        <h6>{{ formatPrice(data.price) }}</h6>
      </div>
      <div class="position-absolute top-0 end-0 absolute right-0">
        <button @click="handleRemoveCart(index)" class="btn border">Xóa</button>
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
