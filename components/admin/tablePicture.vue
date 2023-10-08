<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="picture in pictures">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="picture.url" alt="Picture" />
                </div>
              </div>
            </div>
          </td>
          <td>$ {{ picture.price / 100 }}</td>
          <td>edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Picture } from "@/types/interface";
const props = defineProps<{ pictures: Picture[] }>();
const { pictures } = toRefs(props);
</script>

<style scoped></style>
