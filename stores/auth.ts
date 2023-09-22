// stores/counter.js
import { defineStore } from 'pinia'
import { useCartStore } from "@/stores/cart";
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
      /* try {
        return await $fetch<{token: string, user: User}>('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            password,
          },
        }).then(response => {
          this.authenticated = true;
          this.token = response.token
          this.user = response.user
          this.postTokenFetch()
          return { ok: true ,  message: '' }
        }).catch((error) => {
          this.logoutUser()
          return { ok: false, message: error.data.message ? error.data.message : 'error' }
        });
      } catch (error) {
        return { ok: false, message: error }
      } */
      const loginResult = await useAsyncData<{token: string, user: User}>('login', () => $fetch('/auth/login', {
        method: 'POST',
        body: {
          username,
          password,
        },
        }))
    console.log(loginResult, 'loginResult')
    if (loginResult.data.value) {
      this.authenticated = true;
      this.token = loginResult.data.value?.token!
      this.user = loginResult.data.value?.user!
      this.postTokenFetch()
    } else {
      this.logoutUser()
    }

    return loginResult
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
      const storeCart = useCartStore();
      storeCart.$reset()
    },
  },
  
  persist: true
})