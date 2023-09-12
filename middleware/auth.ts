import { useAuthStore } from "@/stores/auth";
export default defineNuxtRouteMiddleware(async (to, from) => {
    const storeAuth = useAuthStore();
    //const user = useSupabaseUser();
    console.log('auth')
    if (!storeAuth.authenticated) {
      return navigateTo('/login');
    }

  });