<template>
  <NuxtLink
    :to="to"
    class="bg-yellow-500 p-6 rounded-2xl flex flex-col justify-between h-48 relative overflow-hidden group hover:bg-yellow-600 transition-colors"
  >
    <h2 class="text-h2 font-bold text-black">{{ title }}</h2>
    <div class="absolute -bottom-4 -right-4 text-white/50">
      <slot></slot>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>