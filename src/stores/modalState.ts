import { defineStore } from 'pinia'

export const useModal = defineStore('useModal', {
  // arrow function recommended for full type inference
  state: () => {
    return {
    isModalCart: false
    }
  },
})