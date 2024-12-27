<template>
  <div class="mb-6">
    <button
      class="flex items-center gap-2 px-6 py-3 bg-white border-2 rounded-lg shadow-sm mb-4 hover:bg-gray-50"
      @click="toggleExpanded"
    >
      <span
        class="transform transition-transform"
        :class="{ 'rotate-180': !isExpanded }"
      >
        ▼
      </span>
      <span class="font-semibold">{{ title }}</span>
      <span
        class="ml-2 px-3 py-0.5 text-sm rounded-full"
        :class="[badgeColor, badgeTextColor]"
      >
        {{ count }}
      </span>
    </button>

    <div v-if="isExpanded" class="space-y-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const isExpanded = ref(true);

const badgeColor = computed(() => {
  switch (props.type) {
    case "out":
      return "bg-red-100";
    case "low":
      return "bg-yellow-100";
    case "in":
      return "bg-green-100";
    default:
      return "bg-gray-100";
  }
});

const badgeTextColor = computed(() => {
  switch (props.type) {
    case "out":
      return "text-red-600";
    case "low":
      return "text-yellow-600";
    case "in":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
});

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>