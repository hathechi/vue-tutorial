<template>
  <section>
    <div class="container">
      <br />
      <h1>Danh sách sản phẩm</h1>
      <RouterLink to="/game">
        <button class="btn border my-3">Đến trang game</button>
      </RouterLink>
      <br />
      <div class="search">
        <input
          type="search"
          v-model="inputSearch"
          @input="searchProduct"
          class="custom-input"
          placeholder="Tìm kiếm"
        />
      </div>
      <div class="row">
        <div class="col-8">
          <div class="body-list-product">
            <ItemProduct
              v-for="item in dataProducts"
              :key="item._id"
              :data="item"
              :handerAddCart="handerAddCart"
            >
              <template v-slot:list-img>
                <ListImage :images="item.listMedias" />
              </template>
            </ItemProduct>
          </div>
        </div>
        <div class="col-4">
          <div class="title">
            <h1>Giỏ hàng</h1>
          </div>
          <div class="total-price d-flex gap-3 my-3">
            <h4>Tổng tiền:</h4>
            <h4 class="text-danger">{{ formatPrice(toTalPriceCart) }}</h4>
          </div>
          <draggable v-model="listCart">
            <ItemCart
              v-for="(itemCart, index) in listCart"
              :data="itemCart"
              :index="index"
              :key="index"
              :handleRemoveCart="handleRemoveCart"
            />
          </draggable>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import ItemProduct from '@/components/ItemProduct.vue'
import ItemCart from '@/components/ItemCart.vue'
import formatPrice from '@/utils/formatMoney'
import ListImage from '@/components/ListImage.vue'
import graphqlService from '@/services/apiServices'
import type { ProductType } from '@/types/Product'
import { computed, defineComponent, onMounted, ref } from 'vue'
import pullAt from 'lodash/pullAt'
import { VueDraggableNext } from 'vue-draggable-next'

const dataProducts = ref<ProductType[]>([])
let inputSearch = ref<string>('')
let listCart = ref<ProductType[]>([])

const handerAddCart = (itemCart: ProductType) => {
  listCart.value.push(itemCart)
}
const handleRemoveCart = (index: number) => {
  // listCart.value.splice(index, 1)
  pullAt(listCart.value, index)
}

const toTalPriceCart = computed((): number => {
  let total = 0
  listCart.value.forEach((item) => {
    total += item.price
  })
  return total
})

const searchProduct = () => {
  getProducts(inputSearch.value)
}

async function getProducts(keyword: string) {
  try {
    const response = await graphqlService.getProducts(keyword)
    dataProducts.value = response.data.data.products || []
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

defineComponent({
  components: {
    draggable: VueDraggableNext
  }
})

onMounted(() => {
  getProducts(inputSearch.value)
})
</script>
