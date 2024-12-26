<template>
  <button
    :class="[
      'primary-button',
      `icon-${iconPosition}`,
      { 'is-pressed': pressed, 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <Icon name="uil:github" v-if="hasIcon && iconPosition === 'left'" />
    <span class="button-text"><slot>Button Text</slot></span>
    <Icon name="uil:github" v-if="hasIcon && iconPosition === 'right'" />
    <Camera color="red" :size="32" />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  iconPosition: {
    type: String,
    default: "none",
    validator: (value) => ["none", "left", "right"].includes(value),
  },
  pressed: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const hasIcon = computed(() => props.iconPosition !== "none");

defineEmits(["click"]);
</script>

<style scoped>
.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #fdb913;
  color: #000;

  /* Ensure a consistent, decent width */
  min-width: 8rem; /* Adjust this value to your preference */
  max-width: 12rem; /* Optional: Prevent the button from becoming too wide */
}

.primary-button:hover {
  background-color: #e5a711;
}

.primary-button.is-pressed {
  background-color: #d69a2d;
}

.primary-button.is-disabled {
  background-color: #fff5e1;
  color: #a8a8a8;
  cursor: not-allowed;
}

.primary-button :deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.primary-button.is-disabled :deep(svg) {
  opacity: 0.5;
}
</style>
