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
</template>

<script setup lang="ts">
const {
  signIn,
  signUp,
  token,
  data,
  status,
  lastRefreshedAt,
  signOut,
  getSession,
} = useAuth();
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
  try {
    loading.value = true;
    const a = await signIn(data, { redirect: false /* callbackUrl: "/login" */ });
    $toast.success("welcome");
    if (route.redirectedFrom?.name === "checkout") {
      navigateTo("/checkout");
    } else {
      navigateTo("/offer");
    }
  } catch (error) {
    //console.log(error, "aaaaa");
    $toast.error("Unexpected error, please try again");
  } finally {
    loading.value = false;
  }
};

const register = async (data: DataLogin) => {
  console.log(data, "register");
  try {
    loading.value = true;
    /* const a = await signUp(
      { email: data.username, password: data.password, fullName: data.fullName },
      { redirect: false}
    ); */
    const user = await $fetch<DataLogin>(
      "https://paloverde-production.up.railway.app/api/auth/register",
      {
        method: "POST",
        body: { email: data.username, password: data.password, fullName: data.fullName },
      }
    ).catch((error) => {
      $toast.error(error.data.message[0]);
    });
    if (user) {
      console.log(user, "registrado");
      /* $toast.promise(login(user), {
        loading: "Loading",
      }); */
      $toast.success("Registered user successfully");
      $toast.promise(login(user), {
        loading: "Loading",
        success: (data: any) => "Success",
        error: (data: any) => "Error",
      });
    }
  } catch (error) {
    //console.log(error, "aaaaa");
    alert(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
