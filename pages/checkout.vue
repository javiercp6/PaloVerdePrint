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
                isCart
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
                $ <span class="font-extrabold">{{ store.cartPrice / 100 }}</span>
              </div>
            </div>

            <!-- <form @submit.prevent="pay()">
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
            </form> -->
            <button
              :disabled="pendingAddWish"
              class="btn btn-primary w-full"
              @click="pay()"
            >
              <span
                v-if="pendingAddWish"
                class="loading loading-ring text-primary"
              ></span>
              <p :class="pendingAddWish ? 'text-primary' : ''">
                {{ pendingAddWish ? "Loading" : "Pay" }}
              </p>
            </button>
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
  middleware: ["user"],
});
const { addWish, pendingAddWish } = useWish();
import { useCartStore } from "@/stores/cart";
const store = useCartStore();
const { $toast } = useNuxtApp();

const pay = async () => {
  const { ok, message } = await addWish();

  if (!ok) {
    $toast.error(message);
  }
  /*  const link = document.createElement("a");
  link.href =
    "https://checkout.stripe.com/c/pay/cs_test_b1bLyJr7Cd940Rw2e652ygzThzsj10Qi0w1sD4MZqmyn67N4QIgyyult9s#fidkdWxOYHwnPyd1blpxYHZxWjA0S2pdU3ROR0lTMGA0clxcc3BMYEh3ampmajVjc1VSVEpyN1BOSHdhZGhKQFVfM2xsbDxAb09MM3R%2FdVZJZ0RNcUBxVG9xRFVUSzN%2FZjVffGZKR3JLdk8wNTUwY1F%2Fd39CfCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl";
  //link.target = "_blank";
  link.click(); */
};
</script>
