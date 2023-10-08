<template>
  <section class="px-16 py-4 mx-auto flex flex-col justify-center">
    <div v-if="!pending && data" class="container w-full">
      <div
        class="grid gap-4 gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-10"
      >
        <div v-for="offer in data?.data" class="w-full">
          <WidgetsOfferCard :offer="offer" />
        </div>
      </div>
    </div>
    <WidgetsLoading v-if="pending" />
    <WidgetsError v-if="error && !pending" :error="error" @refresh="refresh()" />
    <div v-if="!pending && data" class="flex justify-center">
      <WidgetsPagination :page="page" :totalPage="data?.totalPages!" />
    </div>
    <!--     <button class="btn btn-primary btn-sm text-xs" @click="wish" type="submit">
      fghfgh
    </button> -->
  </section>
</template>

<script setup lang="ts">
import { Offer } from "@/types/interface";
const { page } = useUtils();
const { pending, data, error, refresh } = await useMyFetch<{
  data: Offer[];
  totalPages: number;
}>("/offers", {
  lazy: true,
  query: { page: page },
  watch: [page],
});
</script>

<style scoped></style>
