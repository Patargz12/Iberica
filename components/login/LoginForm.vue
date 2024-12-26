<template>
  <div class="w-full max-w-md">
    <h1 class="text-2xl font-bold text-gray-800 mb-2">Pharmacist Portal</h1>
    <p class="text-gray-600 mb-6">Provide your credentials to continue</p>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>

      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <div class="relative">
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <span v-if="showPassword">👁️</span>
            <span v-else>👁️‍🗨️</span>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="rememberMe"
            class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
          />
          <span class="ml-2 text-sm text-gray-600">Remember Me</span>
        </label>
        <a href="#" class="text-sm text-yellow-500 hover:text-yellow-600">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        class="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const showPassword = ref(false);

const handleSubmit = () => {
  // Handle login logic here
  console.log("Login attempt:", {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });

  navigateTo("/Dashboard");
};
</script>