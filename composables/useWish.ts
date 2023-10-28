import { useCartStore } from '@/stores/cart';
import type { Wish, Offer } from '../types/interface';

export const useWish = () => {
  const store = useCartStore();
  //const file = ref<File | null>(null)
  const picture = ref({
    url: '',
    _id: '',
    price: 0
  })

  const wishForm = ref({
    quantity: 1,
    material: '',
    price: 0
  })

  const pendingWish = ref(false)
  const pendingAddWish = ref(false)


  const addWishToCard = async (offer: string, width: number, height: number, file?: File ) =>{
    pendingWish.value = true
    //let image = URL.createObjectURL(order.value.imageFile)
    const toWish: Wish = {}
    toWish.material = wishForm.value.material
    toWish.offer = offer
    toWish.picture = { ...picture.value}
    toWish.price = wishForm.value.price
    toWish.width = width
    toWish.height = height
    toWish.quantity = wishForm.value.quantity
    if (file) {      
      const formData = new FormData()
      formData.append('file', file)
      /* await $fetch<any>('/pictures', {
        method: 'POST',
        body: formData,
      }).then(response => {
        toWish.picture.url = response?.url
        toWish.picture._id = response?._id
        toWish.picture.price = 0
        console.log(wishForm.value, 'probandooooo')
        store.addOrder(toWish)
        return { ok: true ,  message: '' }
      }).catch((error) => {
        console.log(error.data.message)
        return { ok: false, message: error.data.message as string }
      }) */
      const picture = await useAsyncData<any>("pictures", () =>
        $fetch("/pictures", {
          method: "POST",
          body: formData,
        })
      );
      pendingWish.value = false
      if (picture.data) {
        toWish.picture.url = picture.data.value.url
        toWish.picture._id = picture.data.value._id
        toWish.picture.price = 0
        console.log(wishForm.value, 'probandooooo')
        store.addOrder(toWish)
      }
      return picture
    } else {
      store.addOrder(toWish)
    }
    pendingWish.value = false
  }
  const addWish = async () =>{
    pendingAddWish.value = true
    const toWish: { offer: string, height: number, width: number, picture: string, quantity: number }[] = []
    store.cart.forEach(e => {
      toWish.push(
        {
          offer: e.offer!,
          height: e.height,
          width: e.width,
          picture: e.picture._id!,
          quantity: e.quantity
        }
      )
    });
    /* return await $fetch<any>('/orders', {
      method: 'POST',
      body: toWish,
    }).then(response => {
      console.log(response)
      store.$reset()
      pendingAddWish.value = true
      openExternal(response.paymentLink)
      return { ok: true ,  message: '' }
    }).catch((error) => {
      pendingAddWish.value = true
      return { ok: false, message: error.data.message as string }
    }) */
    const order = await useAsyncData<any>("order", () =>
        $fetch("/orders", {
          method: "POST",
          body: toWish,
        })
      );
    if (order.data.value) {
      console.log(order.data.value)
      console.log(order.data.value.paymentLink)
      store.$reset()
      //openExternal(order.data.paymentLink)
      const link = document.createElement("a");
      link.href = order.data.value.paymentLink;
      //link.target = '_blank'
      link.click();
    }
    
    pendingAddWish.value = false
    return order
  }

  const openExternal = (endpoint: string) => {
    const link = document.createElement("a");
    link.href = endpoint;
    //link.target = '_blank'
    link.click();
  };
  
 /*  const getProductById = async(íd: string): Promise<Product> => {
    const { data } = await useFetch<Product>(`https://apininas.vercel.app/api/products/${íd}`);
    return data;
  } */

  return { wishForm, addWishToCard, pendingWish, picture, addWish, pendingAddWish }
}
