import { defineNuxtPlugin } from '#app'
import { Cropper , Preview } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import 'vue-advanced-cropper/dist/theme.bubble.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('cropper', Cropper)
  nuxtApp.vueApp.component('preview', Preview)
})