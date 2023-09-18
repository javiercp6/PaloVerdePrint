<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div ref="menu" class="dropdown">
        <summary
          tabindex="0"
          class="btn btn-ghost btn-circle md:hidden"
          @click="dropdownOpen = !dropdownOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </summary>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          v-if="dropdownOpen"
        >
          <li>
            <NuxtLink active-class="text-primary" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </NuxtLink>
          </li>
          <li>
            <details open>
              <summary>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
                >Offer
              </summary>
              <ul>
                <li>
                  <NuxtLink
                    active-class="text-primary"
                    :to="{ path: '/offer', query: { category: 'papel' } }"
                    >Papel Print</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    exact-active-class="text-primary"
                    :to="{ path: '/offer', query: { category: 'metal' } }"
                    >Metal Print</NuxtLink
                  >
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Item 3
            </a>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Palo Verde</NuxtLink>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink active-class="text-primary" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink active-class="text-primary" to="/offer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Offer</NuxtLink
          >
        </li>
        <!-- <li tabindex="0">
          <details>
            <summary>Offer</summary>
            <ul
              class="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52"
              style="margin-top: 1.15rem"
            >
              <li>
                <NuxtLink
                  active-class="text-primary"
                  :to="{ path: '/offer', query: { category: 'papel' } }"
                  >Papel Print</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  exact-active-class="text-primary"
                  :to="{ path: '/offer', query: { category: 'metal' } }"
                  >Metal Print</NuxtLink
                >
              </li>
            </ul>
          </details>
        </li> -->
        <!-- <div class="dropdown dropdown-hover">
          <li tabindex="0"><a>Item 3</a></li>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <NuxtLink active-class="text-primary" to="/checkout">Item 1</NuxtLink>
            </li>
            <li><a>Item 2</a></li>
          </ul>
        </div> -->
        <li><a>Item 3</a></li>
      </ul>
    </div>
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
      <div class="dropdown dropdown-end">
        <NuxtLink tabindex="0" to="/checkout" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item text-red-600">{{
              store.cart.length
            }}</span>
          </div>
        </NuxtLink>
        <!-- <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow"
          v-show="dropdownOpen"
        >
          <div class="card-body">
            <span class="font-bold text-lg">{{ store.cart.length }} Items</span>
            <span class="text-info">Subtotal: ${{ store.cartPrice }}</span>
            <div class="card-actions">
              <NuxtLink class="btn btn-primary btn-block btn-sm text-xs" to="/checkout">
                View cart
              </NuxtLink>
            </div>
          </div>
        </div> -->
      </div>
      <div class="dropdown dropdown-end">
        <label
          v-if="storeAuth.authenticated"
          tabindex="0"
          class="btn btn-ghost btn-circle avatar"
        >
          <!-- <div class="w-10 flex justify-center justify-items-center rounded-full">
            <div>
              
            </div>
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div> -->
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
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
//const { data, status, signOut } = useAuth();
import { useAuthStore } from "@/stores/auth";
const storeAuth = useAuthStore();
import { useRoute } from "vue-router";
const colorMode = useColorMode();
//const darkMode = ref(colorMode.preference === "dark" ? true : false);
const store = useCartStore();

const dropdownOpen = ref(false);

const route = useRoute();

const menu = ref(null);
onMounted(() => {
  window.addEventListener("click", function (e) {
    if (!menu.value?.contains(e.target)) {
      dropdownOpen.value = false;
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
/* watch(darkMode, (newValue, oldName) => {
    // Haz algo (side effects) 👁
    if (newValue) {
      colorMode.preference = "dark";
    } else {
      colorMode.preference = "light";
    }
  }); */

watch(route, () => {
  dropdownOpen.value = false;
});

const onSingnOut = () => {
  storeAuth.logoutUser();
  navigateTo("/");
};
</script>

<style scoped></style>
