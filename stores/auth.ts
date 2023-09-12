// stores/counter.js
import { defineStore } from 'pinia'
import { ofetch } from "ofetch";
import jwtDecode from 'jwt-decode'
import type { User } from '../types/interface';


/* interface Order {
  name: string;
  material: string;
  size: string;
  price: number; 
} */
interface AuthState {
  authenticated: boolean,
  token: string | null,
  user: User
}

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    token: null,
    user: {}
  } as AuthState),

  getters: {
   /*  cartPrice: (state) => {
      let subtotal = 0
      state.cart.forEach(e => subtotal += ((e.photoPrice + e.sizePrice ) * e.amount));
      return subtotal
    } */
  },

  actions: {
    async loginUser({ username, password }: UserPayloadInterface) {
        return await $fetch<{token: string, user: User}>('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            password,
          },
        }).then(response => {
          /* Update Pinia state */
          this.authenticated = true;
          this.token = response.token
          this.user = response.user
          this.postTokenFetch()
          return { ok: true ,  message: '' }
          /* Store user in local storage to keep them logged in between page refreshes */
        }).catch((error) => {
          console.log(error.data.message)
          this.logoutUser()
          return { ok: false, message: error.data.message as string }
        });

    },
    async checkAuth() {
      if (this.token) {
        const decodedToken: any = jwtDecode(this.token)
        const dateNow = new Date()
        if (decodedToken.exp < dateNow.getTime() / 1000) {
          //this.refreshToken()
          this.logoutUser()
        } else {
          //this.token = token
        }
      } else {
        this.logoutUser()
      }
    },

    postTokenFetch(){
      const config = useRuntimeConfig()
      const defaultOptions = {
        baseURL: config.public.baseURL,
        headers: {
          // Aquí es donde agregarías el token JWT almacenado
          Authorization: this.token ? `Bearer ${this.token}` : '',
        },
      };
      globalThis.$fetch = ofetch.create(defaultOptions);
    },

    logoutUser() {
      this.authenticated = false; // set authenticated  state value to false
      this.token = null; // clear the token cookie
      this.user = {};
      this.postTokenFetch()
    },
  },
  
  persist: true
})