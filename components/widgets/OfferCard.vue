<template>
  <div class="card card-compact bg-base-200 shadow-xl w-auto">
    <figure class="h-44 object-cover w-full">
      <img class="object-cover w-full" :src="offer.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ offer.title }}</h2>
      <p>{{ offer.material }} Print</p>
      <div class="card-actions justify-end items-center">
        <!-- <p class="text-red-500">${{ offer.price.value }}</p> -->
        <NuxtLink
          :to="{ path: '/offer/' + offer._id }"
          class="btn btn-primary btn-sm text-xs"
          >Buy Now</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Offer } from "../../types/interface";
const props = defineProps<{ offer: Offer }>();
const { offer } = toRefs(props);
</script>

<style scoped></style>
