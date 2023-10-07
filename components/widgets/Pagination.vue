<template>
  <div class="join">
    <!-- <NuxtLink class="join-item btn-sm" :to="{ query: { page: Number(page) - 1 } }">
      «</NuxtLink
    > -->
    <button :disabled="page <= 1" class="join-item btn-sm" @click="toPage(-1)">«</button>
    <button class="join-item btn-sm">Page {{ page }} / {{ totalPage }}</button>
    <button :disabled="totalPage === page" class="join-item btn-sm" @click="toPage(1)">
      »
    </button>
    <!-- <NuxtLink
      class="join-item btn-sm"
      disabled
      :to="{ query: { page: Number(page) + 1 } }"
    >
      »</NuxtLink
    > -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ page: number; totalPage: number }>();
const { page, totalPage } = toRefs(props);
const router = useRouter();

const toPage = (n: number) => {
  router.push({ query: { page: page.value + n } });
};
</script>

<style scoped></style>
