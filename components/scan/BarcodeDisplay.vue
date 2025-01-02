<template>
  <div class="barcode-container">
    <canvas ref="barcodeCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import JsBarcode from "jsbarcode/dist/JsBarcode.all.min";

const props = defineProps<{
  code: string;
}>();

const barcodeCanvas = ref<HTMLCanvasElement | null>(null);

const generateBarcode = () => {
  if (barcodeCanvas.value) {
    JsBarcode(barcodeCanvas.value, props.code, {
      format: "CODE128",
      width: 2,
      height: 100,
      displayValue: false,
    });
  }
};

onMounted(() => {
  generateBarcode();
});

watch(
  () => props.code,
  () => {
    generateBarcode();
  }
);
</script>