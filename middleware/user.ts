import { useAuthStore } from "@/stores/auth";
export default defineNuxtRouteMiddleware((to, from) => {
    const storeAuth = useAuthStore();
    //const user = useSupabaseUser();
  
    if (!storeAuth.authenticated || !storeAuth.user.roles.includes('ROLE_USER')) {
      return navigateTo('/login');
    }
  });