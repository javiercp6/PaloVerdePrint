// stores/counter.js
import { defineStore } from 'pinia'
import type { Picture } from "../types/interface";

interface PictureState {
  pictures: Picture[],
  pending: boolean
}

export const usePictureStore = defineStore('picture', {
  state: () => ({
    pictures: [],
    pending: false
  } as PictureState),

  getters: {
  },

  actions: {
    async addOrder(state: PictureState){
      state.pending = true
      const pictures = await $fetch<Picture[]>('https://apipaloverde.vercel.app/api/wishes',).catch((error) => {
          alert(error.data.message[0])   
        } )
      if (pictures) {
        state.pictures = pictures
      }
      state.pending = false
    }
  },
  
  persist: true
})