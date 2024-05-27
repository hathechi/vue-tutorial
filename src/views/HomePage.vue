<template>
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
        <div>{{ list }}</div>
        <!-- <div v-for="list in listCart">{{ list.name }}</div> -->
        <!-- <draggable v-model="listCart">
          <TransitionGroup type="transition" name="flip-list">
            <div v-for="(itemCart, index) in listCart" :key="index">
              <ItemCart :data="itemCart" :index="index" :handleRemoveCart="handleRemoveCart" />
            </div>
          </TransitionGroup>
        </draggable> -->
        <draggable class="dragArea" tag="ul" :list="list" :group="{ name: 'g1' }">
          <li v-for="el in list" :key="el.name">
            <p>{{ el.name }}</p>
            <NestedDraggable :list="el.tasks" />
          </li>
        </draggable>
      </div>
    </div>
  </div>
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
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import NestedDraggable from '@/components/NestedDraggable.vue'

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

const list = ref([
  {
    name: 'task 1',
    tasks: [
      {
        name: 'task 2',
        tasks: []
      }
    ]
  },
  {
    name: 'task 3',
    tasks: [
      {
        name: 'task 4',
        tasks: []
      }
    ]
  },
  {
    name: 'task 5',
    tasks: []
  }
])

const changeDrag = (value: any) => {
  console.log('sadsdasdasda', listCart.value, value)
}

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

onMounted(() => {
  getProducts(inputSearch.value)
})
</script>

<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
