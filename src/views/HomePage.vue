<template>
<<<<<<< HEAD
  <section>
    <div class="container">
      <br />
      <h1>Danh sách sản phẩm</h1>
      <RouterLink to="/game">
        <button class="btn border my-3">Đến trang game</button>
      </RouterLink>
      <br />
      <div class="search">
        <input type="search" v-model="inputSearch" @input="searchProduct" class="custom-input" placeholder="Tìm kiếm" />
      </div>
      <div class="row">
        <div class="col-8">
          <div class="body-list-product">
            <ItemProduct v-for="item in dataProducts" :key="item._id" :data="item" :handerAddCart="handerAddCart">
              <template v-slot:list-img>
                <ListImage :images="item.listMedias" />
              </template>
            </ItemProduct>
          </div>
=======
  <section class="container relative">
    <section class="banner">
      <div class="w-ful">
        <img class="w-full"
             src="https://static.vecteezy.com/system/resources/previews/008/381/877/non_2x/shoe-store-banner-vector.jpg"
             alt="banner">
      </div>

    </section>
    <section class="my-5 rounded bg-gray-100">
      <div class="w-full flex justify-between items-center px-2 py-3">
        <div class="w-50"><h1 class="text-2xl">SẢN PHẨM HOT</h1></div>
        <Countdown :dayEnd="moment().add(10,'day').format('YYYY-MM-DD hh:mm:ss')"/>
        <div class="w-1/2 ">
          <input
            type="search"
            v-model="inputSearch"
            @input="searchProduct"
            class="custom-input focus:outline-none"
            placeholder="Tìm kiếm"
          />
>>>>>>> 85968a66965bb8f95d3849228e0a31cc94ab8882
        </div>
      </div>
      <div class="grid grid-cols-4">
        <ItemProduct
          v-for="item in dataProducts"
          :key="item._id"
          :data="item"
          :handerAddCart="handlerAddCart"
          @handleClickImage="feedbackMessage"
        >
          <template v-slot:list-img>
            <ListImage :images="item.listMedias" />
          </template>
        </ItemProduct>

      </div>
    </section>

    <div v-if="modal.isModalCart" class="fixed inset-0 flex items-center justify-center z-10">
      <!-- Overlay để làm mờ nền -->
      <div class="fixed inset-0 bg-black opacity-50 pointer-events-none "></div>

      <!-- Modal content -->
      <div class="relative bg-red-200 rounded w-4/6 h-[80vh] p-4 z-20">
        <div class="w-full flex justify-end"><img @click="()=>{modal.isModalCart = false}"
                                                  class="w-[30px] h-[30px] rounded-2xl"
                                                  src="https://png.pngtree.com/element_our/png/20181229/vector-cancel-icon-png_302651.jpg"
                                                  alt=""></div>
        <div class="h-full">
          <div class="flex gap-3 my-3">
            <h4>Tổng tiền:</h4>
            <h4 class="text-red-800 text-xl items-center">{{ formatPrice(toTalPriceCart) }}</h4>
          </div>
          <div class="h-[80%] overflow-auto">
            <ItemCart v-for="(item, index) in listCart.listCartState" :key="index" :data="item" :index="index"
                      :handle-remove-cart="handleRemoveCart" />
          </div>
<<<<<<< HEAD
          <draggable :list="listCart">
            <ItemCart v-for="(itemCart, index) in listCart" :data="itemCart" :index="index" :key="index"
              :handleRemoveCart="handleRemoveCart" />
          </draggable>
=======
>>>>>>> 85968a66965bb8f95d3849228e0a31cc94ab8882
        </div>
      </div>
    </div>


  </section>
</template>
<script setup lang="ts">
import ItemProduct from '@/components/ItemProduct.vue'
import formatPrice from '@/utils/formatMoney'
import ListImage from '@/components/ListImage.vue'
import type { ProductType } from '@/types/Product'
import { computed, onMounted, ref } from 'vue'
import pullAt from 'lodash/pullAt'
<<<<<<< HEAD
import { VueDraggableNext } from 'vue-draggable-next'
import axios from 'axios'


import CryptoJS from 'crypto-js';
import moment from 'moment'; // npm install moment

// APP INFO
const config = {
  app_id: 2554,
  key1: "sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn",

  endpoint: "https://sb-openapi.zalopay.vn/v2/create"
};

const embed_data = {};

const items = [{}];
const transID = Math.floor(Math.random() * 1000000);
const order = {
  app_id: config.app_id,
  app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
  app_user: "user123",
  app_time: Date.now(), // miliseconds
  item: JSON.stringify(items),
  embed_data: JSON.stringify(embed_data),
  amount: 50000,
  description: `TEST THANH TOÁN #${transID}`,
  bank_code: "zalopayapp",
};

// appid|app_trans_id|appuser|amount|apptime|embeddata|item
const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
order.mac = CryptoJS.SHA256(data, config.key1).toString();

console.log("MAC=>>>>>", order)


axios.post(config.endpoint, null, { params: order })
  .then(res => {
    console.log("DATAAAAAAAA", res.data);
  })
  .catch(err => console.log("ERRRRRRRRRRRRRRR", err));
=======
import ItemCart from '@/components/ItemCart.vue'
import ProductService from '@/services/productService'
import { useModal } from '@/stores/modalState'
import { useCart } from '@/stores/cartState'
import Countdown from '@/components/Countdown.vue'
import moment from 'moment'
>>>>>>> 85968a66965bb8f95d3849228e0a31cc94ab8882


const dataProducts = ref<ProductType[]>([])
let inputSearch = ref<string>('')

const modal = useModal()
const listCart = useCart()


const  feedbackMessage =(message:string)=>{
  alert(message)
}

const handlerAddCart = (itemCart: ProductType) => {
  listCart.listCartState.push(itemCart)
  console.log(listCart.listCartState)
}
const handleRemoveCart = (index: number) => {
  // listCart.value.splice(index, 1)
  pullAt(listCart.listCartState, index)
}

const toTalPriceCart = computed((): number => {
  let total = 0
  listCart.listCartState.forEach((item) => {
    total += item.price
  })
  return total
})


const searchProduct = () => {
  getProducts(inputSearch.value)
}

async function getProducts(keyword: string) {
  try {
    const response = await ProductService.getData(keyword)
    dataProducts.value = response.data.data.products || []
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

onMounted(() => {
  getProducts(inputSearch.value)
})
</script>

