import { useCartStore } from '@/stores/cart';
import { Wish } from '../types/interface';

export const useWish = () => {
  const store = useCartStore();

  const wishForm = ref({
    user: '64e59fee88cb771c854463bb',
    file: null,
    picture: '',
    amount: 1,
    price: ''
  })

  const pendingWish = ref(false)


  const addWish = async (idOffer: string) =>{
    pendingWish.value = true
    //let image = URL.createObjectURL(order.value.imageFile)
    const formData = new FormData()
    formData.append('user', wishForm.value.user)
    if (wishForm.value.file) {      
      formData.append('file', wishForm.value.file)
    }
    if (wishForm.value.picture) {      
      formData.append('picture', wishForm.value.picture)
    }
    formData.append('amount', wishForm.value.amount)
    formData.append('price', wishForm.value.price)
    formData.append('offer', idOffer)

  console.log(formData)
  /* const { data, pending, error } = await useFetch('https://apipaloverde.vercel.app/api/wishes', {
      method: 'POST',
      body: formData
  }) */
  const wish = await $fetch<Wish>('https://apipaloverde.onrender.com/api/wishes', {
    method: 'POST',
    body: formData
  }).catch((error) => {
    alert(error.data.message[0])   
  } )
  if (wish) {
    store.addOrder(wish)
  }
  pendingWish.value = false
    //store.addOrder({...order.value})
    //store.cart.push(order.value)
  }
 /*  const getProductById = async(íd: string): Promise<Product> => {
    const { data } = await useFetch<Product>(`https://apininas.vercel.app/api/products/${íd}`);
    return data;
  } */

  return { wishForm, addWish, pendingWish }
}
