import { Offer } from '../types/interface';

export const useOffer = (id: string = '') => {
  const getOffers = async():Promise<Object> => {
    //const { data } = await useFetch<Offer[]>('https://apipaloverde.vercel.app/api/offers');
    const { pending, data: offers, error } = await useFetch('https://paloverde-production.up.railway.app/api/offers', {
      lazy: true,
    })
    console.log(offers, error);
    return { pending, offers };
  }
 /*  const getProductById = async(íd: string): Promise<Product> => {
    const { data } = await useFetch<Product>(`https://apininas.vercel.app/api/products/${íd}`);
    return data;
  } */

  return { getOffers }
}
