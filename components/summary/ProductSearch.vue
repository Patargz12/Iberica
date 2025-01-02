<template>
  <div class="w-full max-w-none">
    <div class="relative">
      <input
        type="text"
        placeholder="Product Search"
        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg pr-10 focus:outline-none focus:border-gray-300"
        v-model="searchQuery"
        @input="handleSearch"
      />
      <button
        class="absolute right-3 top-1/2 transform -translate-y-1/2"
        @click="handleSearch"
      >
        <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-gray-400" />
      </button>
    </div>
    <div class="text-sm text-gray-400 mt-1.5">
      Search a product here (for amount and quantity based coupons only)
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref("");
const emit = defineEmits(["search"]);

const handleSearch = () => {
  emit("search", searchQuery.value);
};
</script>