<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse w-full">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Sign in</h1>
        <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <LoginRegister />
          <p href="#" class="label-text-alt">
            Don't have an account?
            <NuxtLink to="/register" class="btn btn-active btn-link px-0"
              >Sign up</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: "/",
  },
});
</script>

<style scoped></style>
