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
      state.cart.forEach(e => subtotal += ((e.picture.price + e.price?.value ) * e.quantity));
      return subtotal
    }
  },

  actions: {
    addOrder(order: Wish){
      //this.cart = [{name: 'f', material: 'ff', size: 'fff' }]
      console.log(order, 'fff')
      let ord = {}
      ord = {...order}
      this.cart.push(order)
    },
    addQuantity(pos: number){
      this.cart[pos].quantity ++
    },
    restQuantity(pos: number){
      if (this.cart[pos].quantity > 1) {
        this.cart[pos].quantity --
      }
    },
    removeOrder(pos: number){
      this.cart.splice(pos, 1)
    }
  },
  
  persist: true
})