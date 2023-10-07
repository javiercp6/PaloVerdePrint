<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Navbar Title</div>
        <div class="navbar-end">
          <label class="swap swap-rotate btn btn-ghost btn-circle">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" v-model="darkMode" />

            <!-- sun icon -->
            <svg
              class="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>

            <!-- moon icon -->
            <svg
              class="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </label>
          <div ref="menuAccount" class="dropdown dropdown-end">
            <label
              v-if="storeAuth.authenticated"
              tabindex="0"
              class="btn btn-ghost btn-circle avatar"
              @click="dropdownOpenAccount = !dropdownOpenAccount"
            >
              <svg viewBox="0 0 16 16" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </g>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              v-if="dropdownOpenAccount"
            >
              <li>
                <a>{{ storeAuth.user?.fullName }}</a>
              </li>
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><NuxtLink to="/order">My orders</NuxtLink></li>
              <li @click="onSingnOut"><a>Logout</a></li>
            </ul>
          </div>
          <NuxtLink
            v-if="!storeAuth.authenticated"
            class="btn btn-primary btn-sm text-xs"
            to="/login"
            >Login</NuxtLink
          >
        </div>
      </div>

      <!-- Page content here -->
      <slot />
    </div>

    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <NuxtLink class="h-11 flex justify-center" to="/admin">
          Palo Verde Admin</NuxtLink
        >
        <li>
          <NuxtLink active-class="text-primary" to="/admin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4h6v8h-6z"></path>
              <path d="M4 16h6v4h-6z"></path>
              <path d="M14 12h6v8h-6z"></path>
              <path d="M14 4h6v4h-6z"></path>
            </svg>
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="text-primary" to="/admin/offer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l11 0"></path>
              <path d="M9 12l11 0"></path>
              <path d="M9 18l11 0"></path>
              <path d="M5 6l0 .01"></path>
              <path d="M5 12l0 .01"></path>
              <path d="M5 18l0 .01"></path>
            </svg>
            Offer
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="text-primary" to="/admin/order">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
              <path d="M3 9l4 0"></path>
            </svg>
            Order
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="text-primary" to="/admin/picture">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 8h.01"></path>
              <path
                d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"
              ></path>
              <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
              <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
            </svg>
            Picture
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="text-primary" to="/admin/user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
            User
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";
const storeAuth = useAuthStore();
const colorMode = useColorMode();
const dropdownOpen = ref(false);
const dropdownOpenAccount = ref(false);

const route = useRoute();

const menu = ref(null);
const menuAccount = ref(null);
onMounted(() => {
  window.addEventListener("click", function (e) {
    if (!menu.value?.contains(e.target)) {
      dropdownOpen.value = false;
    }
    if (!menuAccount.value?.contains(e.target)) {
      dropdownOpenAccount.value = false;
    }
  });
});
const darkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

watch(route, () => {
  dropdownOpen.value = false;
  dropdownOpenAccount.value = false;
});

const onSingnOut = () => {
  storeAuth.logoutUser();
  navigateTo("/");
};
</script>

<style scoped></style>
