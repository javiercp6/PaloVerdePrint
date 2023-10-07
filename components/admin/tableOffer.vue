<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Material</th>
          <th>Image</th>
          <th>Active</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="offer in offers" :key="offer._id">
          <td>{{ offer.title }}</td>
          <td>{{ offer.material }}</td>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="offer.image" alt="Offer" />
                </div>
              </div>
              <!-- <div>
                <div class="font-bold">{{ user.fullName }}</div>
              </div> -->
            </div>
          </td>
          <td>
            <input
              type="checkbox"
              class="toggle toggle-primary toggle-sm"
              :checked="offer.isActive"
            />
          </td>
          <td>
            <div class="pb-2" v-for="price in offer.prices">
              <p>{{ price.size }}</p>
              <p>$ {{ price.value / 100 }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Offer } from "@/types/interface";
const props = defineProps<{ offers: Offer[] }>();
const { offers } = toRefs(props);
</script>

<style scoped></style>
