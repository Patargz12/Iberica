<template>
  <div class="border-b pb-4">
    <div class="flex justify-between items-start">
      <!-- Barcode and Product Info -->
      <div class="w-1/2">
        <img
          :src="item.barcodeImage"
          :alt="`Barcode for ${item.name}`"
          class="w-full h-24 object-contain mb-2"
        />
        <p class="text-sm text-gray-500">SKU: {{ item.sku }}</p>
        <p class="font-medium mt-1">{{ item.name }}</p>
        <p v-if="item.dosage" class="text-sm text-gray-600">
          ({{ item.dosage }})
        </p>
      </div>

      <!-- Price and Quantity Controls -->
      <div class="w-1/2 pl-4 flex flex-col items-end">
        <div class="flex items-center gap-4 mb-2">
          <span class="font-bold">₱{{ formatPrice(item.price) }}</span>
          <span class="text-gray-400 line-through"
            >₱{{ formatPrice(item.originalPrice) }}</span
          >
        </div>
        <div class="flex items-center gap-3">
          <button
            class="w-8 h-8 flex items-center justify-center border rounded-md"
            @click="updateQuantity(-1)"
          >
            −
          </button>
          <span class="w-8 text-center">{{ quantity }}</span>
          <button
            class="w-8 h-8 flex items-center justify-center border rounded-md"
            @click="updateQuantity(1)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ScanItem } from "~/types/scan";

const props = defineProps<{
  item: ScanItem;
}>();

const quantity = ref(1);

const formatPrice = (price: number) => price.toFixed(2);

const updateQuantity = (change: number) => {
  const newQuantity = quantity.value + change;
  if (newQuantity >= 1) {
    quantity.value = newQuantity;
  }
};
</script>