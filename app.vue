<template>
  <NuxtLayout>
    <main>
      <NuxtPage style="min-height: calc(100vh - 66px)" />
    </main>
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
