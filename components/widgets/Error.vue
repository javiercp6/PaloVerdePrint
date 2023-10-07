<template>
  <div class="flex flex-col justify-center">
    <p class="">{{ error.data?.message || error.message }}</p>
    <div class="flex justify-center">
      <button class="btn btn-ghost btn-sm text-xs" @click="emitrefresh">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
          <path d="M12 9l0 3"></path>
          <path d="M12 15l.01 0"></path>
        </svg>
        Refresh
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["refresh"]);
const props = defineProps<{ error: any }>();
const { error } = toRefs(props);

const emitrefresh = () => {
  emit("refresh");
};
</script>

<style scoped></style>
