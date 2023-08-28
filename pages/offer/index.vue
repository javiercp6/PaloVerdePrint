<template>
  <section class="px-16 py-4 mx-auto flex justify-center">
    <div v-if="!pending" class="container w-full">
      <div
        class="grid gap-4 gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-10"
      >
        <div v-for="offer in offers" class="w-full">
          <WidgetsOfferCard :offer="offer" />
        </div>
      </div>
    </div>
    <span v-if="pending" class="loading loading-ring loading-lg"></span>
    <div v-if="error && !pending">
      {{ error }}
    </div>
  </section>
</template>

<script setup lang="ts">
//import { useMyFetch } from "~/composables/useMyFetch";
const { pending, data: offers, error } = await useMyFetch("/offers", {
  lazy: true,
});

/* const { data: offers, pending, error, refresh } = await useAsyncData("mountains", () =>
  $fetch("https://apipaloverde.vercel.app/api/offers")
); */

/* const offers = [
  { _id: "", title: "Título", material: "", price: { _id: "", value: 99 } },
  {
    _id: "",
    title: " asfsdf sdfdsf sdfsdfsdf sdf sdfer gerh",
    material: "",
    price: { _id: "", value: 99 },
  },
  { _id: "", title: "", material: "", price: { _id: "", value: 99 } },
  { _id: "", title: "", material: "", price: { _id: "", value: 99 } },
]; */
</script>

<style scoped></style>
