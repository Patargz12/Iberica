<template>
  <div class="border-t pt-4">
    <div class="space-y-2">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>₱{{ formatPrice(data.subtotal) }}</span>
      </div>
      <div class="flex justify-between text-green-600">
        <span>Promo Discount</span>
        <span>-₱{{ formatPrice(data.promoDiscount) }}</span>
      </div>
      <div class="flex justify-between text-blue-600">
        <span>Doctor's Points Earned</span>
        <span>{{ data.pointsEarned }} pts.</span>
      </div>
    </div>

    <div class="mt-6 flex justify-between items-center text-xl font-bold">
      <span>Total</span>
      <span>₱{{ formatPrice(data.total) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ScanData } from "~/types/scan";

defineProps<{
  data: ScanData;
}>();

const formatPrice = (price: number) => price.toFixed(2);
</script>