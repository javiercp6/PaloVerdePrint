// stores/counter.js
import { defineStore } from 'pinia'
import type { Wish } from "../types/interface";


/* interface Order {
  name: string;
  material: string;
  size: string;
  price: number; 
} */
interface CartState {
  cart: Wish[]
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  } as CartState),

  getters: {
    cartPrice: (state) => {
      let subtotal = 0
      state.cart.forEach(e => subtotal += ((e.photoPrice + e.sizePrice ) * e.amount));
      return subtotal
    }
  },

  actions: {
    addOrder(order: Wish){
      //this.cart = [{name: 'f', material: 'ff', size: 'fff' }]
      console.log(order, 'fff')
      this.cart.push(order)
    },
    addQuantity(pos: number){
      this.cart[pos].amount ++
    },
    restQuantity(pos: number){
      if (this.cart[pos].amount > 1) {
        this.cart[pos].amount --
      }
    },
    removeOrder(pos: number){
      this.cart.splice(pos, 1)
    }
  },
  
  persist: true
})