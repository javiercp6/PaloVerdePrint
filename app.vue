<template>
  <NuxtLayout>
    <NuxtPage keepalive class="dark:bg-gray-900" style="min-height: calc(100vh - 66px)" />
    <Toaster richColors position="bottom-center" />
  </NuxtLayout>
</template>
<script>
import { useAuthStore } from "@/stores/auth";
export default {
  created() {
    const auth = useAuthStore();
    auth.postTokenFetch();
  },
};
</script>
