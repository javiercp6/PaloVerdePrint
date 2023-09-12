import { useAuthStore } from "@/stores/auth";
export default defineNuxtRouteMiddleware(async (to, from) => {
    const storeAuth = useAuthStore();
    await storeAuth.checkAuth()
  });