import { User } from '../types/interface';
import { useUtils } from './useUtils';


export const useUser = () => {
  const getUser = async () =>{
    const { page } = useUtils();
    const users = await useFetch<{data: User[], totalPages: number}>("/users", {
      lazy: true,
      server: false,
      query: { page: page },
      watch: [page]
    });

    return users
  }

  return { getUser }
}
