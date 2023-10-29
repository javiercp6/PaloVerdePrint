<template>
  <div class="mt-4 max-w-[1200px] mx-auto px-2 min-h-full">
    <WidgetsLoading v-if="pendingOffer" />
    <WidgetsError
      v-if="errorOffer && !pendingOffer"
      :error="errorOffer"
      @refresh="refreshOffer()"
    />
    <div
      v-if="offer"
      class="md:flex md:flex-row-reverse gap-4 justify-between mx-auto w-full min-h-[calc(100vh - 68px - 80px)]"
    >
      <div class="md:w-[40%] p-3">
        <div class="bg-base-200 rounded-lg p-3">
          <div v-if="step === 1">
            <WidgetsDropZone
              @pass-image="getImageDrop"
              @clear-image="clearImageDrop"
              class="mt-4"
            />
            <FormKit
              ref="formSize"
              @submit="onsubmitSize()"
              type="form"
              submit-label="Save"
              :actions="false"
              :disabled="!currentImage"
            >
              <div class="pt-4 flex justify-items-center">
                <div class="flex-1">
                  <div class="flex flex-col justify-center py-1">
                    <!-- <input
                      v-model="width"
                      type="number"
                      placeholder=""
                      class="input input-bordered input-sm w-full"
                    /> -->
                    <FormKit
                      v-model="width"
                      type="number"
                      name="Width"
                      label="Width:"
                      placeholder="Width:"
                      :validation="`required|number|between:1,${maxWidth}`"
                      :help="`The maximum print size that this image accepts is
                      ${maxWidth} inches`"
                      validation-visibility="live"
                      min="1"
                      :max="maxWidth"
                      step="1"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-items-center">
                <div class="flex-1">
                  <div class="flex flex-col justify-center py-1">
                    <FormKit
                      v-model="height"
                      type="number"
                      name="Height"
                      label="Height:"
                      placeholder="Height:"
                      :validation="`required|number|between:1,${maxHeight}`"
                      :help="`The maximum print size that this image accepts is
                      ${maxHeight} inches`"
                      validation-visibility="live"
                      min="1"
                      step="1"
                    />
                  </div>
                </div>
                <!-- <div class="flex flex-col justify-center">
                <input
                  v-model="height"
                  type="number"
                  placeholder=""
                  class="input input-bordered input-sm max-w-[60px] ml-2"
                />
              </div> -->
              </div>
            </FormKit>
            <div class="pt-4 flex justify-items-center">
              <h4 class="text-red-500">
                ${{ (price - price * offer.discount * 0.01) * 0.01 }}
              </h4>
              <div class="flex pl-2" v-if="offer.discount > 0">
                <h4 class="line-through">$ {{ price * 0.01 }}</h4>
                <span class="badge badge-sm indicator-item text-red-500"
                  >-{{ offer.discount }} %</span
                >
              </div>
            </div>
          </div>
          <div v-if="step === 2">
            <div>
              <h2 class="card-title">{{ offer?.title }}</h2>
              <p>{{ offer?.material }} Print</p>
            </div>
            <div class="py-4">
              <p>Size</p>
              <div class="pl-2">
                <p>
                  Width: <span class="truncate"> {{ width }} </span> inches
                </p>
                <p>
                  Height: <span class="truncate"> {{ height }} </span>
                  inches
                </p>
              </div>
            </div>
            <FormKit
              type="form"
              submit-label="Save"
              @submit="onsubmit()"
              :actions="false"
              :disabled="pendingWish"
            >
              <FormKit
                v-model.number="wishForm.quantity"
                type="number"
                name="quantity"
                label="Quantity"
                placeholder="Quantity"
                validation="required"
                min="1"
                step="1"
              />
              <div class="flex py-4 justify-between justify-items-center">
                <div class="flex flex-col justify-center">
                  <h4 class="text-red-500">
                    ${{ (price - price * offer.discount * 0.01) * 0.01 }}
                  </h4>
                  <div class="flex" v-if="offer.discount > 0">
                    <h4 class="line-through">$ {{ price * 0.01 }}</h4>
                    <span class="badge badge-sm indicator-item text-red-500"
                      >-{{ offer.discount }} %</span
                    >
                  </div>
                </div>
                <div class="form-control">
                  <FormKit
                    :disabled="pendingWish"
                    :classes="{
                      input: {
                        'text-primary': pendingWish,
                      },
                    }"
                    type="submit"
                  >
                    <p
                      :class="pendingWish ? 'text-primary' : ''"
                      class="flex justify-items-center justify-center"
                    >
                      <span
                        v-if="pendingWish"
                        class="loading loading-ring text-primary"
                      ></span>
                      {{ pendingWish ? "Loading" : "Add to card" }}
                    </p>
                  </FormKit>
                </div>
              </div>
            </FormKit>
          </div>
        </div>
      </div>
      <div class="md:w-[60%] p-3 flex justify-center">
        <cropper
          v-show="step == 1 && !isImgSmall"
          class="cropper"
          ref="cropp"
          :stencil-props="{
            aspectRatio: width / height,
          }"
          :resizeImage="{ wheel: false }"
          :min-height="height * 300"
          :min-width="width * 300"
          :default-size="defaultSize"
          :src="currentImage"
          @error=""
        />
        <div v-if="step == 1 && isImgSmall" class="flex flex-col justify-center">
          <h2 class="text-center text-red-500">
            The image does not have the minimum resolution to print. Please enter another
            image
          </h2>
        </div>
        <div v-if="step == 2" class="flex flex-col justify-center">
          <div class="max-h-min bg-slate-50 shadow-lg shadow-black p-3">
            <preview
              :width="500"
              :height="500 * (result.coordinates?.height / result.coordinates?.width)"
              :image="result.image"
              :coordinates="result.coordinates"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between py-4">
      <button
        class="btn btn-primary btn-sm text-xs btn-outline"
        :class="step === 1 ? 'invisible' : ''"
        @click="step = 1"
      >
        Back
      </button>
      <button
        class="btn btn-primary btn-sm text-xs"
        :class="step === 2 || !currentImage ? 'invisible' : ''"
        @click="next()"
      >
        {{ step === 2 ? "Loading" : "Next" }}
      </button>
    </div>
    <Toaster richColors position="bottom-center" />
  </div>
</template>

<script setup lang="ts">
import { Offer, Picture } from "@/types/interface";
const { $toast } = useNuxtApp();
const route = useRoute();
const { addWishToCard, wishForm, picture, pendingWish } = useWish();
/* const currentImage = ref(
  "https://res.cloudinary.com/dffxm40yt/image/upload/v1694627835/inu4cvmxqkpwnfapqcmh.png"
); */
const cropp = ref();
const formSize = ref<any>(null);
const imgType = ref("image/jpeg");
const height = ref(0);
const width = ref(0);
const maxHeight = ref(0);
const maxWidth = ref(0);
const step = ref(1);
const loadingCrop = ref(false);
const currentImage = ref("");
const result = ref({
  coordinates: null,
  image: null,
});

const {
  pending: pendingOffer,
  data: offer,
  error: errorOffer,
  refresh: refreshOffer,
} = await useFetch<Offer>(`/offers/${route.params.id}`, {
  lazy: true,
  server: false,
});
/* const { pending: pendingPictures, data: pictures, error: errorPictures } = await useFetch<
  Picture[]
>(`/pictures`, {
  lazy: true,
  server: false,
}); */

const getImageDrop = async (fileDrop: File) => {
  const img = new Image();
  console.log(fileDrop);
  img.onload = function () {
    maxHeight.value = img.height / 300;
    maxWidth.value = img.width / 300;
    height.value = img.height / 300 / 2;
    width.value = img.width / 300 / 2;
  };
  img.src = URL.createObjectURL(fileDrop);
  imgType.value = fileDrop.type ? fileDrop.type : "image/jpeg";
  const url = URL.createObjectURL(fileDrop);
  currentImage.value = url;
  picture.value._id = "";
  picture.value.url = "";
  picture.value.price = 0;
};

function clearImageDrop() {
  currentImage.value = "";
  //cropper.destroy();
  maxHeight.value = 0;
  maxWidth.value = 0;
  height.value = 1;
  width.value = 1;
}

watch(width, (newValue, oldName) => {
  // Haz algo (side effects) 👁
  if (newValue > maxWidth.value || newValue < 1) {
    width.value = oldName;
  }
});
watch(height, (newValue, oldName) => {
  // Haz algo (side effects) 👁
  if (newValue > maxHeight.value || newValue < 1) {
    height.value = oldName;
  }
});

const defaultSize = ({ imageSize, visibleArea }: any) => {
  return {
    width: (visibleArea || imageSize).width,
    height: (visibleArea || imageSize).height,
  };
};

const flip = (x: boolean, y: boolean) => {
  cropp.value.flip(x, y);
};
const rotate = (angle: number) => {
  cropp.value.rotate(angle);
};

const uploadImage = async () => {
  loadingCrop.value = true;
  const { coordinates, image } = await cropp.value.getResult();
  result.value = {
    coordinates,
    image,
  };
  console.log(coordinates, image);
  loadingCrop.value = false;
};

const price = computed(() => {
  return (
    offer.value?.price! *
    (Math.ceil(width.value) * Math.ceil(height.value)) *
    Number(wishForm.value.quantity)
  );
});

const isImgSmall = computed(() => {
  return currentImage.value && (maxWidth.value < 1 || maxHeight.value < 1) ? true : false;
});

const next = () => {
  const node = formSize.value?.node;
  const a = node.submit();
  console.log(a);
};

const onsubmitSize = async () => {
  await uploadImage();
  step.value = 2;
  console.log(step.value);
};

const onsubmit = async () => {
  if (!currentImage.value && !picture.value._id) {
    $toast.error("Select an image");
  } else {
    pendingWish.value = true;
    wishForm.value.material = offer.value?.material!;
    wishForm.value.price = offer.value?.price!;
    const { canvas } = await cropp.value.getResult();
    if (canvas) {
      canvas.toBlob((blob: any) => {
        console.log(blob);
        $toast.promise(
          addWishToCard(route.params.id as string, width.value, height.value, blob),
          {
            loading: "Uploading image...",
            success: (data: any) => "Order added to cart",
            error: (data: any) => data.message,
          }
        );
      }, "image/jpeg");
    }
  }
};
</script>

<style scoped>
.cropper {
  height: 500px;
  width: 100%;
  background: #ddd;
}

.truncate {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
