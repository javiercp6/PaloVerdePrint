import { AdminTableUser } from '../../.nuxt/components';
<template>
  <main class="flex-1 overflow-y-auto pt-8 px-6">
    <AdminTableLayout title-btn="Add Order" title="Orders">
      <template v-slot:tableBody>
        <AdminTableOrder v-if="data?.data && !pending && !error" :orders="data.data" />
        <span v-if="pending" class="loading loading-ring loading-lg"></span>
        <WidgetsError v-if="error && !pending" :error="error" @refresh="refresh()" />
      </template>
      <template v-slot:pagination>
        <WidgetsPagination :page="page" :totalPage="data?.totalPages!" />
      </template>
    </AdminTableLayout>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const { page } = useUtils();
const { getOrders } = useOrder();
const { data, pending, error, refresh } = await getOrders();
</script>

<style scoped></style>
