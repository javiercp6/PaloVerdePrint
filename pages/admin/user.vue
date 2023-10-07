import { AdminTableUser } from '../../.nuxt/components';
<template>
  <!-- <div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
    <div class="flex justify-between">
      <div>
        <h2>Offer</h2>
      </div>
      <div>
        <button class="btn btn-primary btn-sm text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Button
        </button>
      </div>
    </div>
    <AdminTable2 />
  </div> -->
  <main class="flex-1 overflow-y-auto pt-8 px-6">
    <AdminTableLayout title-btn="Add User" title="User">
      <template v-slot:tableBody>
        <AdminTableUser v-if="data?.data && !pending && !error" :users="data.data" />
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
const { getUser } = useUser();
const { data, pending, error, refresh } = await getUser();

console.log(error);
</script>

<style scoped></style>
