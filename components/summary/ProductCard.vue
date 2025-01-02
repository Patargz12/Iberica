<template>
  <div class="bg-white rounded-lg overflow-hidden border border-gray-100">
    <div class="bg-gray-50 px-3 py-4 flex flex-col items-center">
      <NuxtImg
        :src="product.image"
        :alt="`Barcode for ${product.name}`"
        class="w-[95%] h-24 object-contain"
      />
      <div class="text-sm text-gray-500 mt-2">SKU: {{ product.sku }}</div>
    </div>
    <div class="bg-gray-100 p-3">
      <div class="flex justify-between items-start">
        <div class="text-sm">{{ product.name }}</div>
        <div class="flex flex-col items-end">
          <span class="font-medium"
            >₱{{ product.currentPrice.toFixed(2) }}</span
          >
          <span class="text-gray-400 text-sm line-through">
            ₱{{ product.originalPrice.toFixed(2) }}
          </span>
        </div>
      </div>
      <div v-if="product.subtitle" class="text-sm text-gray-500 mt-1">
        {{ product.subtitle }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

defineProps<{
  product: Product;
}>();
</script>