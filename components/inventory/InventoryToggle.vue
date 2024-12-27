<template>
  <div class="flex rounded-lg overflow-hidden">
    <button
      @click="$emit('update:modelValue', 'botika')"
      class="px-4 py-2 text-h3 font-medium transition-colors"
      :class="
        modelValue === 'botika'
          ? 'bg-yellow-500 text-black'
          : 'bg-white text-gray-700'
      "
    >
      Botika
    </button>
    <button
      @click="$emit('update:modelValue', 'freebies')"
      class="px-4 py-2 text-h3 font-medium transition-colors"
      :class="
        modelValue === 'freebies'
          ? 'bg-yellow-500 text-black'
          : 'bg-white text-gray-700'
      "
    >
      Freebies
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>