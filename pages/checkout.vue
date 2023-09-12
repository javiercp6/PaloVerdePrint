<template>
  <section>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full mb-4">
        <div class="md:w-[65%]">
          <div class="bg-base-200 rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>

            <div>
              <NuxtLink class="flex items-center pb-2 text-blue-500 hover:text-red-400">
                Update Address
              </NuxtLink>
            </div>

            <NuxtLink class="flex items-center text-blue-500 hover:text-red-400">
              Add New Address
            </NuxtLink>
          </div>

          <div id="Items" class="bg-base-200 rounded-lg p-4 mt-4">
            <!-- <div v-for="product in userStore.checkout">
              <CheckoutItem :product="product" />
            </div> -->
            <div v-for="(wish, index) in store.cart" :key="index">
              <WidgetsCheckoutItem
                :wish="wish"
                @add-quantity="store.addQuantity(index)"
                @rest-quantity="store.restQuantity(index)"
                @remove-order="store.removeOrder(index)"
              />
              <div v-if="store.cart.length !== index + 1" class="divider"></div>
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />
        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-base-200 rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>

            <div class="flex items-center justify-between my-4">
              <div class="">Total Shipping</div>
              <div class="">Free</div>
            </div>

            <div class="border-t" />

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ store.cartPrice }}</span>
              </div>
            </div>

            <form @submit.prevent="pay()">
              <div class="border border-gray-500 p-2 rounded-sm" id="card-element" />

              <p
                id="card-error"
                role="alert"
                class="text-red-700 text-center font-semibold"
              />
              <button
                class="btn btn-primary btn-sm text-xs w-full mt-4"
                @click="addOrder"
              >
                Pay
              </button>
            </form>
          </div>

          <div class="bg-base-200 rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">Palo Verde</div>
            <p class="my-2">Palo Verde keeps your information and payment safe</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: [
    "user",
    // Add in more middleware here
  ],
});
import { useCartStore } from "@/stores/cart";
const store = useCartStore();
</script>
