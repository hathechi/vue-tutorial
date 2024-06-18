<template>
  <div>
    <body>
    <header class="container flex w-full items-center justify-between sticky">
      <div class="w-50 ">
        <img class="w-50 h-[100px] object-cover"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUn2xxVpMUaYkMJjVPRv5i3qY3xNrsJ_b1A&s"
             alt="">
      </div>
      <div class="flex gap-5">
        <a class="hover:text-red-300 cursor-pointer" href="/">
          <div>HOME</div>
        </a>
        <a class="hover:text-red-300 cursor-pointer" href="/">
          <div>PRODUCT</div>
        </a>

        <div class="relative">
          <div @click="()=>{modal.isModalCart = !modal.isModalCart}" class="hover:text-red-300 cursor-pointer">CART </div>
          <span class="flex justify-center items-center bg-pink-300 p-1 w-[26px] h-[26px] rounded-[50%] absolute top-[-15px] right-[-20px]">{{listCart.listCartState.length}}</span>
        </div>


      </div>
    </header>
    <main>
      <div>
        <router-view />
      </div>
    </main>
    <footer>
      <div class="footer">Footer</div>
    </footer>
    </body>
  </div>
</template>
<script setup lang="ts">
import { useModal } from '@/stores/modalState'
import { useCart } from '@/stores/cartState'

const modal = useModal()

const listCart = useCart()
</script>
