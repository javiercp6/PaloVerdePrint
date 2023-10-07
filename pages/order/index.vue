<template>
  <div class="my-4 max-w-[1200px] flex justify-center mx-auto px-2">
    <div
      v-if="orders && !pending"
      class="flex justify-center justify-items-center w-full md:block"
    >
      <div>
        <WidgetsOrderCard
          v-for="order in orders.data"
          :key="order._id"
          :order="order"
          showBtn
        />
      </div>

      <span v-if="pending" class="loading loading-ring loading-lg"></span>

      <!--  <div v-if="error && !pending">
        {{ error.data.message || error.message }}
      </div> -->
    </div>
    <div v-if="pending || error" class="flex justify-center justify-items-center">
      <span v-if="pending" class="loading loading-ring loading-lg"></span>
      <div class="flex justify-center justify-items-center" v-if="error">
        <!-- <p v-if="error.data.message">{{ error.data.message }}</p>
        <p v-else>{{ error }}</p> -->
        <p class="inline-block">{{ error.data?.message || error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["user"],
});
import { type Order } from "@/types/interface";
const { pending, data: orders, error } = await useFetch<Order[]>("/orders/user", {
  lazy: true,
  server: false,
});
</script>

<style scoped></style>
