<template>
  <FormKit
    type="form"
    submit-label="Save"
    @submit="onsubmit"
    :actions="false"
    :disabled="loading"
  >
    <FormKit
      v-if="props.register"
      type="text"
      name="fullName"
      id="fullname"
      validation="required|alpha_spaces:latin"
      label="Fullname"
      placeholder="Fullname"
    />
    <FormKit
      type="email"
      name="username"
      id="name"
      validation="required|email"
      label="Email"
      placeholder="e.g. name@gmail.com"
    />
    <FormKit
      type="password"
      name="password"
      label="Password"
      placeholder="Password"
      validation="required|length:6|contains_uppercase|contains_lowercase|contains_numeric"
    />
    <FormKit
      v-if="props.register"
      type="password"
      name="password_confirm"
      label="Confirm password"
      placeholder="Confirm password"
      validation="required|confirm"
    />
    <label v-if="!props.register" class="label">
      <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
    </label>
    <div class="form-control mt-6">
      <FormKit
        :disabled="loading"
        :classes="{
          input: {
            'text-primary': loading,
          },
        }"
        type="submit"
      >
        <p
          :class="loading ? 'text-primary' : ''"
          class="flex justify-items-center justify-center"
        >
          <span v-if="loading" class="loading loading-ring text-primary"></span>
          {{ loading ? "Loading" : props.register ? "Register" : "Login" }}
        </p>
      </FormKit>
    </div>
  </FormKit>
  <Toaster richColors position="bottom-center" />
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
const { $toast } = useNuxtApp();
const route = useRoute();
interface DataLogin {
  fullName?: string;
  username: string;
  password: string;
  password_confirm?: string;
}
const props = defineProps({ register: { type: Boolean, default: false } });
const loading = ref(false);

const onsubmit = async (data: DataLogin) => {
  if (props.register) {
    await register(data);
  } else {
    await login(data);
  }
};

const login = async (data: DataLogin) => {
  console.log(data);

  loading.value = true;
  //const a = await signIn(data, { redirect: false /* callbackUrl: "/login" */ });
  const { error } = await store.loginUser(data);
  if (!error.value) {
    $toast.success("welcome");
    if (route.redirectedFrom?.name === "checkout") {
      navigateTo("/checkout");
    } else {
      navigateTo("/offer");
    }
  } else {
    console.log(error);
    if (error.value.data) {
      $toast.error(error.value.data.message || "Error");
    } else {
      $toast.error(error.value.message || "Error");
    }
  }
  loading.value = false;
};

const register = async (data: DataLogin) => {
  console.log(data, "register");
  loading.value = true;
  /* const a = await signUp(
      { email: data.username, password: data.password, fullName: data.fullName },
      { redirect: false}
    ); */
  /* const user = await $fetch<DataLogin>("auth/register", {
      method: "POST",
      body: { email: data.username, password: data.password, fullName: data.fullName },
    }).catch((error) => {
      $toast.error(error.data.message[0]);
    }); */
  const { data: user, error } = await useAsyncData<DataLogin>("register", () =>
    $fetch("/auth/register", {
      method: "POST",
      body: { email: data.username, password: data.password, fullName: data.fullName },
    })
  );
  if (user.value) {
    console.log(user, "registrado");
    /* $toast.promise(login(user), {
        loading: "Login",
      }); */
    $toast.success("Registered user successfully");
    $toast.promise(login(user.value), {
      loading: "Login...",
      success: (data: any) => "",
      error: (data: any) => "",
    });
  }
  if (error.value) {
    if (error.value.data) {
      $toast.error(error.value.data.message || "Error");
    } else {
      $toast.error(error.value.message || "Error");
    }
  }
};
</script>

<style scoped></style>
