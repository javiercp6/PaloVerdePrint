<template>
  <!-- <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img class="h-full w-full object-cover object-center" />
    </div> -->

  <div class="flex flex-col md:flex-row bg-base-200 rounded-lg p-4 mt-4">
    <div class="flex flex-col justify-items-center">
      <div class="md:w-20 flex justify-center">
        <svg
          v-if="order.status === 'Accepted'"
          xmlns="http://www.w3.org/2000/svg"
          class="text-primary w-7 h-7"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M9 12l2 2l4 -4"></path>
        </svg>
        <svg
          v-if="order.status === 'Paid'"
          xmlns="http://www.w3.org/2000/svg"
          class="text-blue-500 w-7 h-7"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
          ></path>
          <path d="M9 12l2 2l4 -4"></path>
        </svg>
        <svg
          v-if="order.status === 'Rejected'"
          xmlns="http://www.w3.org/2000/svg"
          class="text-error w-7 h-7"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M10 10l4 4m0 -4l-4 4"></path>
        </svg>
        <svg
          v-if="order.status === 'Pending'"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 6l0 -3"></path>
          <path d="M16.25 7.75l2.15 -2.15"></path>
          <path d="M18 12l3 0"></path>
          <path d="M16.25 16.25l2.15 2.15"></path>
          <path d="M12 18l0 3"></path>
          <path d="M7.75 16.25l-2.15 2.15"></path>
          <path d="M6 12l-3 0"></path>
          <path d="M7.75 7.75l-2.15 -2.15"></path>
        </svg>
      </div>
      <div class="flex justify-center">
        <span class="text-sm text-gray-500">{{ order.status }}</span>
      </div>
    </div>
    <div class="md:flex w-full justify-around text-base font-mediumpy-2 md:py-0">
      <!-- <h3>{{ order.name }}</h3> -->
      <div class="px-2 flex md:block">
        <h2 class="mt-1 text-s pr-2">Order number:</h2>
        <p class="mt-1 text-sm text-gray-500">{{ order._id }}</p>
      </div>
      <div class="px-2 flex md:block">
        <p class="mt-1 text-s pr-2">Order date:</p>
        <p class="mt-1 text-sm text-gray-500">{{ order.createdAt }}</p>
      </div>
      <!-- <div class="px-2">
        <p class="mt-1 text-sm text-gray-500">Items</p>
        <p class="mt-1 text-sm text-gray-500">4 items</p>
      </div> -->
      <div class="px-2 flex md:block">
        <p class="mt-1 text-s pr-2">Total Price:</p>
        <p class="mt-1 text-sm text-gray-500">$ {{ order.paid / 100 }}</p>
      </div>
      <!-- <label class="btn btn-ghost btn-circle">
          <svg class="h-5 w-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1l-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
            />
          </svg>
        </label> -->
    </div>
    <div v-if="showBtn" class="mx-2 flex justify-end">
      <div class="flex flex-row justify-center justify-items-center">
        <NuxtLink
          :to="{ path: '/order/' + order._id }"
          class="btn btn-outline btn-primary btn-sm text-xs"
          >See details</NuxtLink
        >
      </div>
    </div>

    <!-- <div class="flex flex-1 items-end justify-between text-sm pt-2">
        <div class="flex items-center border-gray-100">
          <span
            class="cursor-pointer rounded-l bg-base-300 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
          >
            -
          </span>
          <p class="px-1">cc</p>
          <span
            class="cursor-pointer rounded-r bg-base-300 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
          >
            +
          </span>
        </div>

        <div class="flex pr-3">
          <h3 class="text-red-500"></h3>
        </div>
      </div> -->
  </div>
</template>

<script setup lang="ts">
import { type Order } from "@/types/interface";
const props = defineProps<{ order: Order, showBtn?: boolean }>();
const { order } = toRefs(props);
const { showBtn } = toRefs(props);
</script>

<style scoped></style>
