<template>
  <div class="hero min-h-screen bg-img-1">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Lorem ipsum dolor sit amet. Aut voluptas deleniti qui molestiae delectus et
          natus nihil aut quia voluptas vel quia assumenda. Ea quae odit vel enim dicta
          est earum quasi sit ipsam asperiores ut optio eius et saepe error.
        </p>
        <button class="btn btn-primary">See offers</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-img-1 {
  background-image: url(@/assets/hero.jpg);
}
</style>
