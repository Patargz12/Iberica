<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { useRouter } from "vue-router";
import { useScanStore } from "~/stores/scan";

const router = useRouter();
const scanStore = useScanStore();

const videoElement = ref<HTMLVideoElement | null>(null);
const cameraContainer = ref<HTMLDivElement | null>(null);
const isModalOpen = ref(false);
let stream: MediaStream | null = null;

// Camera setup
onMounted(async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    if (videoElement.value) {
      videoElement.value.srcObject = stream;
    }
  } catch (error) {
    console.error("Camera access error:", error);
    // Handle error appropriately
  }
});

// Cleanup
onUnmounted(() => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
});

const handleCameraTap = async () => {
  try {
    isModalOpen.value = true;

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Process scan
    await scanStore.processScan();

    // Navigate to summary
    router.push("/summary");
  } catch (error) {
    console.error("Scan processing error:", error);
    // Handle error appropriately
  } finally {
    isModalOpen.value = false;
  }
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>


<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Camera View -->
    <div
      ref="cameraContainer"
      class="relative w-full h-[80vh] bg-black"
      @click="handleCameraTap"
    >
      <video
        ref="videoElement"
        class="w-full h-full object-cover"
        autoplay
        playsinline
      ></video>

      <!-- Scanning overlay -->
      <div
        class="absolute inset-0 border-2 border-blue-500 opacity-50 pointer-events-none"
      >
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div class="w-64 h-64 border-2 border-white rounded-lg"></div>
        </div>
      </div>
    </div>

    <!-- Scanning Modal -->
    <TransitionRoot appear :show="isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-[800px] transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-xl transition-all"
              >
                <div class="flex flex-col items-center space-y-6">
                  <!-- Loading Spinner Container -->
                  <div class="relative">
                    <div class="w-24 h-24 rounded-full bg-emerald-50"></div>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        class="w-8 h-8 border-[3px] border-emerald-100 rounded-full animate-spin"
                      >
                        <div
                          class="w-full h-full border-[3px] border-emerald-400 rounded-full border-t-transparent animate-spin"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <!-- Title -->
                  <DialogTitle
                    as="h3"
                    class="text-[32px] font-bold text-gray-900 tracking-tight"
                  >
                    Coupon Scanned
                  </DialogTitle>

                  <!-- Message -->
                  <p class="text-gray-600 text-lg">
                    Please wait while processing
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>


<style scoped>
@keyframes custom-spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: custom-spin 1s linear infinite;
}
</style>