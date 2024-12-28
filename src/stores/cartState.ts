import { defineStore } from 'pinia'
import type { ProductType } from '@/types/Product'

export const useCart = defineStore('useCart', {
  state: () => {
    return {
      listCartState:  [] as ProductType[]
    }
  },
})