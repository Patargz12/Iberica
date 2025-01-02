`<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/25"
          @click="$emit('update:modelValue', false)"
        />

        <!-- Modal Content -->
        <div
          class="relative bg-white rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
        >
          <!-- Close Button -->
          <button
            @click="$emit('update:modelValue', false)"
            class="absolute right-4 top-4 z-10 hover:text-gray-600"
          >
            <Icon
              name="material-symbols:close-rounded"
              class="w-6 h-6 stroke-[3]"
            />
          </button>

          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>`