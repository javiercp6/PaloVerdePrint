<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Email</th>
          <th>Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-circle w-12 h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path
                      d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <div>{{ user.fullName }}</div>
              </div>
            </div>
          </td>
          <td>{{ user.email }}</td>
          <td>
            <p v-for="roles in user.roles">{{ roles }}</p>
          </td>
          <td>edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { User } from "@/types/interface";
const props = defineProps<{ users: User[] }>();
const { users } = toRefs(props);
</script>

<style scoped></style>
