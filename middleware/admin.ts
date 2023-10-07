import { useAuthStore } from "@/stores/auth";
export default defineNuxtRouteMiddleware(async (to, from) => {
    const storeAuth = useAuthStore();
    //const user = useSupabaseUser();
  
    if (!storeAuth.authenticated || !storeAuth.user.roles.includes('ROLE_ADMIN')) {
      return navigateTo('/login');
    }
  });