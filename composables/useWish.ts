import { useCartStore } from '@/stores/cart';
import { Wish, Offer } from '../types/interface';

export const useWish = () => {
  const store = useCartStore();
  const file = ref<File | null>(null)
  const picture = ref({
    url: '',
    _id: '',
    price: 0
  })

  const wishForm = ref({
    quantity: 1,
    material: '',
    price: ''
  })

  const pendingWish = ref(false)
  const pendingAddWish = ref(false)


  const addWishToCard = async (offer: string, prices: any) =>{
    pendingWish.value = true
    //let image = URL.createObjectURL(order.value.imageFile)
    const toWish: Wish = {}
    toWish.material = wishForm.value.material
    toWish.offer = offer
    toWish.picture = { ...picture.value}
    toWish.price = prices
    toWish.quantity = wishForm.value.quantity
    if (file.value) {      
      const formData = new FormData()
      formData.append('file', file.value)
      await $fetch<any>('/pictures', {
        method: 'POST',
        body: formData,
      }).then(response => {
        /* Update Pinia state */
        toWish.picture.url = response?.url
        toWish.picture._id = response?._id
        toWish.picture.price = 0
        console.log(wishForm.value, 'probandooooo')
        store.addOrder(toWish)
        return { ok: true ,  message: '' }
        /* Store user in local storage to keep them logged in between page refreshes */
      }).catch((error) => {
        console.log(error.data.message)
        return { ok: false, message: error.data.message as string }
      })
    } else {
      store.addOrder(toWish)
    }
    pendingWish.value = false
  /* const { data, pending, error } = await useFetch('https://apipaloverde.vercel.app/api/wishes', {
      method: 'POST',
      body: formData
  }) */
  /* const wish = await $fetch<Wish>('api/wishes', {
    method: 'POST',
    body: formData
  }).catch((error) => {
    alert(error.data.message[0])   
  } )
  if (formData) {
    store.addOrder(wishForm.value)
  }
  pendingWish.value = false */
    //store.addOrder({...order.value})
    //store.cart.push(order.value)
  }
  const addWish = async () =>{
    pendingAddWish.value = true
    const toWish: { offer: string, price: string, picture: string, quantity: number }[] = []
    store.cart.forEach(e => {
      toWish.push(
        {
          offer: e.offer,
          price: e.price._id,
          picture: e.picture._id,
          quantity: e.quantity
        }
      )
    });
    return await $fetch<any>('/orders', {
      method: 'POST',
      body: toWish,
    }).then(response => {
      console.log(response)
      store.$reset()
      pendingAddWish.value = true
      openExternal(response.paymentLink)
      return { ok: true ,  message: '' }
      /* Store user in local storage to keep them logged in between page refreshes */
    }).catch((error) => {
      pendingAddWish.value = true
      return { ok: false, message: error.data.message as string }
    })
    
  }
  const openExternal = (endpoint: string) =>{
    const link = document.createElement('a')
    link.href = endpoint
    //link.target = '_blank'
    link.click()
  }
 /*  const getProductById = async(íd: string): Promise<Product> => {
    const { data } = await useFetch<Product>(`https://apininas.vercel.app/api/products/${íd}`);
    return data;
  } */

  return { wishForm, addWishToCard, pendingWish, file, picture, addWish, pendingAddWish }
}
