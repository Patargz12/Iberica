<template>
  <div
    class="bg-white p-4 rounded-lg shadow-sm"
    :class="{ 'bg-gray-50': alternate }"
  >
    <div class="flex justify-between items-center">
      <div>
        <h3 class="font-semibold text-lg">{{ name }}</h3>
        <p class="text-gray-500 text-sm">{{ code }}</p>
      </div>
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-3">
          <BoxIcon class="w-6 h-6 text-red-500" />
          <span class="whitespace-nowrap">{{ quantity }} pcs.</span>
        </div>
        <div class="flex items-center gap-4">
          <CurrencyIcon class="w-6 h-6 text-red-500" />
          <span class="whitespace-nowrap">₱{{ formatPrice(price) }}</span>
        </div>
        <div class="flex items-center gap-2 min-w-[3rem]">
          <span class="w-2 h-2 rounded-full" :class="stockStatusColor"></span>
          <span>{{ stock }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang = "ts">
import BoxIcon from "~/components/icons/BoxIcon.vue";
import CurrencyIcon from "~/components/icons/CurrencyIcon.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  alternate: {
    type: Boolean,
    default: false,
  },
});

const stockStatusColor = computed(() => {
  if (props.stock === 0) return "bg-red-500";
  if (props.stock <= 30) return "bg-yellow-500";
  return "bg-green-500";
});

const formatPrice = (price: number) => {
  return price.toLocaleString("en-PH");
};
</script>