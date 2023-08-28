<template>
  <section class="">
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[40%] p-3">
          <div class="bg-base-200 rounded-lg p-3">
            <img
              v-if="currentImage"
              class="bg-base-200 rounded-lg object-cover h-64 w-full"
              :src="currentImage"
            />
            <div class="flex justify-between justify-items-center">
              <h3 class="pt-3" v-show="!checkboxDrop">Select an image</h3>
              <span></span>
              <label class="cursor-pointer p-0 pt-3 label">
                <span class="label-text pr-1">Upload your image</span>
                <input
                  type="checkbox"
                  class="toggle toggle-primary toggle-sm"
                  v-model="checkboxDrop"
                />
              </label>
            </div>
            <div
              v-if="!checkboxDrop && !pendingPictures && !errorPictures"
              class="grid gap-4 gap-x-1 gap-y-1 grid-cols-7 justify-items-center pt-1"
            >
              <!-- class="flex items-center justify-center mt-2" -->
              <div v-for="image in pictures">
                <img
                  @click="(currentImage = image.url), (wishForm.picture = image._id)"
                  width="70"
                  class="rounded-md object-fit border-[3px] cursor-pointer"
                  :class="currentImage === image.url ? 'border-primary' : ''"
                  :src="image.url"
                />
                <p class="text-xs text-red-500 flex justify-center">${{ image.price }}</p>
              </div>
            </div>
            <div
              v-if="!checkboxDrop && (pendingPictures || errorPictures)"
              class="flex justify-center justify-items-center h-full"
            >
              <span v-if="pendingPictures" class="loading loading-ring loading-lg"></span>
              <p v-if="errorPictures">{{ errorPictures }}</p>
            </div>
            <WidgetsDropZone
              v-if="checkboxDrop"
              @pass-image="getImageDrop"
              @clear-image="clearImageDrop"
              class="mt-4"
            />
          </div>
        </div>
        <div class="md:w-[60%] p-3 flex justify-center">
          <div class="w-full">
            <form
              @submit.prevent="addWish(route.params.id as string)"
              v-if="!pendingOffer && !errorOffer"
              class="form-control bg-base-200 rounded-lg p-3"
            >
              <!--             <input
              type="text"
              placeholder="Name Product"
              class="input input-bordered w-full my-2"
              v-model="wishForm.name"
            /> -->
              <label class="label py-0 pt-2">
                <span class="label-text">Size</span>
              </label>
              <select v-model="wishForm.price" class="select select-bordered w-full my-2">
                <option
                  v-for="price in offer?.prices"
                  :key="price._id"
                  :value="price._id"
                >
                  {{ price.size }}
                </option>
              </select>
              <label class="label py-0 pt-2">
                <span class="label-text">Material</span>
              </label>
              <select class="select select-bordered w-full my-2">
                <option selected>{{ offer?.material }}</option>
              </select>
              <label class="label py-0 pt-2">
                <span class="label-text">Amount</span>
              </label>
              <input
                type="number"
                min="1"
                class="input input-bordered w-full my-2"
                v-model="wishForm.amount"
              />
              <div class="flex py-4 justify-between">
                <h3 class="text-red-500">${{ price }}</h3>
                <button
                  :disabled="pendingWish"
                  class="btn btn-primary btn-sm text-xs"
                  type="submit"
                >
                  <span
                    v-if="pendingWish"
                    class="loading loading-ring text-primary"
                  ></span>
                  <p :class="pendingWish ? 'text-primary' : ''">
                    {{ pendingWish ? "Loading" : "Add to Cart" }}
                  </p>
                </button>
              </div>
            </form>
            <div
              v-if="pendingOffer || errorOffer"
              class="flex justify-center justify-items-center h-full"
            >
              <span v-if="pendingOffer" class="loading loading-ring loading-lg"></span>
              <p v-if="errorOffer">{{ errorOffer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Offer, Picture } from "@/types/interface";
const route = useRoute();
const { addWish, wishForm, pendingWish } = useWish();
const currentImage = ref("/assets/noimage.webp");
let checkboxDrop = ref(false);

const { pending: pendingOffer, data: offer, error: errorOffer } = await useMyFetch<Offer>(
  `/offers/${route.params.id}`,
  {
    lazy: true,
  }
);
const {
  pending: pendingPictures,
  data: pictures,
  error: errorPictures,
} = await useMyFetch<Picture[]>(`/pictures`, {
  lazy: true,
});

function getImageDrop(file: File) {
  const url = URL.createObjectURL(file);
  currentImage.value = url;
  wishForm.value.file = file;
  wishForm.value.picture = "";
  console.log("ddd");
}

function clearImageDrop() {
  currentImage.value = "/assets/noimage.webp";
  wishForm.value.file = null;
}

const price = computed(() => {
  let priceSelectedSize = 0;
  let priceSelectedImg = 0;
  offer.value?.prices.forEach((e) => {
    if (e._id === wishForm.value.price) {
      priceSelectedSize = e.value;
    }
  });
  pictures.value?.forEach((e) => {
    if (e._id === wishForm.value.picture) {
      priceSelectedImg = e.price;
    }
  });
  return (priceSelectedSize + priceSelectedImg) * wishForm.value.amount;
});

watch(checkboxDrop, () => {
  currentImage.value = "/assets/noimage.webp";
  wishForm.value.picture = "";
  wishForm.value.file = null;
});
</script>

<style scoped></style>
