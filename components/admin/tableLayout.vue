<template>
  <div class="card w-full p-6 bg-base-200 shadow-xl mt-2 mb-4">
    <div class="text-xl font-semibold inline-block">
      {{ title }}
      <div class="inline-block float-right">
        <div class="inline-block float-right">
          <button class="btn btn-primary btn-sm text-xs w-full">
            <!--  <span v-if="pendingAddWish" class="loading loading-ring text-primary"></span>
            <p :class="pendingAddWish ? 'text-primary' : ''">
              {{ pendingAddWish ? "Loading" : "Pay" }}
            </p> -->
            {{ titleBtn }}
          </button>
          <!-- <div class="inline-block mr-4">
            <div class="input-group relative flex flex-wrap items-stretch w-full">
              <input
                type="search"
                placeholder="Search"
                class="input input-sm input-bordered w-full max-w-xs"
                value=""
              />
            </div>
          </div>
          <div class="dropdown dropdown-bottom dropdown-end">
            <label tabindex="0" class="btn btn-sm btn-outline"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                ></path></svg
              >Filter</label
            >
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 text-sm shadow bg-base-200 rounded-box w-52"
            >
              <li><a>Paris</a></li>
              <li><a>London</a></li>
              <li><a>Canada</a></li>
              <li><a>Peru</a></li>
              <li><a>Tokyo</a></li>
              <div class="divider mt-0 mb-0"></div>
              <li><a>Remove Filter</a></li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
    <div class="divider mt-2"></div>
    <div class="h-full w-full pb-6 bg-base-200 flex justify-center">
      <slot name="tableBody"></slot>
      <!-- <div class="overflow-x-auto w-full">
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
                      <img src="https://reqres.in/img/faces/1-image.jpg" alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ user.fullName }}</div>
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
      </div> -->
    </div>
    <div class="flex justify-center">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; titleBtn: string }>();
const { title, titleBtn } = toRefs(props);
</script>

<style scoped></style>
