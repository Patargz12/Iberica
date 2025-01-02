`<template>
  <div class="relative" :class="[status === 'expired' ? 'opacity-60' : '']">
    <CouponTicketSvg :color="color" :width="isModal ? 600 : 342" />

    <!-- Coupon Content -->
    <div class="absolute top-0 left-0 w-full h-full flex">
      <!-- Left side with "Coupons" text -->
      <div class="w-[47px] flex items-center justify-center text-white">
        <span
          class="transform -rotate-90 text-xs ml-2 uppercase tracking-wider whitespace-nowrap opacity-40"
          >Coupons</span
        >
      </div>

      <!-- Main content area -->
      <div class="flex-1 py-3 px-4 ml-1">
        <h3 class="text-lg font-bold mb-0.5">{{ title }}</h3>
        <p class="text-sm text-gray-600 mb-0.5">{{ code }}</p>
        <div class="flex items-center">
          <span class="text-sm text-gray-500">{{ validity }}</span>
          <button
            @click="$emit('readMore')"
            class="ml-1 text-sm text-blue-500 hover:text-blue-600"
          >
            read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#E2325C",
  },
  status: {
    type: String,
    default: "active",
    validator: (value) => ["active", "expired"].includes(value),
  },
  isModal: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["readMore"]);
</script>`