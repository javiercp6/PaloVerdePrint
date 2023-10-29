<template>
  <div class="my-4 max-w-[1200px] mx-auto px-2 flex justify-items-center justify-center">
    <div v-if="order" class="bg-base-200 rounded-lg p-4 mt-4 w-full">
      <WidgetsOrderCard v-if="order" :order="order" />
      <div class="divider"></div>
      <div v-for="(wish, index) in order?.wishes" :key="index">
        <WidgetsCheckoutItem
          :wish="{
            picture: { url: wish.image, price: wish.photoPrice },
            material: wish.material,
            price: wish.offerPrice,
            quantity: wish.quantity,
            height: wish.height,
            width: wish.width,
          }"
        />
        <div v-if="order?.wishes!.length !== index + 1" class="divider"></div>
      </div>
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
import { type Order } from "@/types/interface";
const route = useRoute();
const { pending, data: order, error } = await useFetch<Order>(
  `/orders/${route.params.id}`,
  {
    lazy: true,
    server: false,
  }
);
</script>

<style scoped></style>
