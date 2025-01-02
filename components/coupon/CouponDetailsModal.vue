`<template>
  <CouponModal v-model="isOpen">
    <!-- Coupon Preview -->
    <div class="w-full mt-8">
      <div class="px-6 pt-6">
        <CouponTicket v-bind="coupon" :is-modal="true" />
      </div>

      <!-- Description -->
      <div class="p-6 space-y-4">
        <h3 class="text-lg font-semibold">Description</h3>
        <p class="text-gray-600 leading-relaxed">
          {{ coupon.description }}
        </p>
      </div>
    </div>
  </CouponModal>
</template>

<script setup lang="ts">
import type { Coupon } from "~/types/coupon";
import CouponModal from "~/components/modals/CouponModal.vue";
import CoupoonTicket from "~/components/coupon/CouponTicket.vue";

const props = defineProps<{
  modelValue: boolean;
  coupon: Coupon;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>`