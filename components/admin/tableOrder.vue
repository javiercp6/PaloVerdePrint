<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Order id</th>
          <th>Order date</th>
          <th>Total price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders">
          <td>
            {{ order._id }}
          </td>
          <td>{{ order.createdAt }}</td>
          <td>$ {{ order.paid / 100 }}</td>
          <td>
            <div class="badge badge-outline" :class="getBadge(order.status)">
              {{ order.status }}
            </div>
          </td>
          <td>
            <NuxtLink
              :to="{ path: '/admin/order/' + order._id }"
              class="btn btn-outline btn-primary btn-xs text-xs"
              >Details</NuxtLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Order } from "@/types/interface";
const props = defineProps<{ orders: Order[] }>();
const { orders } = toRefs(props);

const getBadge = (status: string) => {
  switch (status) {
    case "Pending":
      return "";
    case "processing":
      return "badge-secondary";
    case "Paid":
      return "badge-accent";
    case "cancelled":
      return "badge-error";
    default:
      return "";
  }
};
</script>

<style scoped></style>
