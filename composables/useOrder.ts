import { Order } from '../types/interface';

export const useOrder = () => {
  const getOrders = async() => {
    const { page } = useUtils();
    const orders = await useFetch<{data: Order[], totalPages: number}>("/orders", {
      lazy: true,
      server: false,
      query: { page: page },
      watch: [page]
    });

    return orders
  }

  return { getOrders }
}
