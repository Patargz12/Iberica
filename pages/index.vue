<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      <Logo />
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from "~/components/login/LoginForm.vue";
import Logo from "~/components/login/Logo.vue";
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(
    135deg,
    #fff5e6 0%,
    #fff3e0 25%,
    #fff1f1 75%,
    #ffffff 100%
  );
}
</style>





