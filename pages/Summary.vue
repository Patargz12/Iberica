<template>
  <div>
    <DashboardHeader />
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Left Column: Search and Products -->
        <div class="lg:col-span-8">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <ProductSearch @search="handleSearch" />
            </div>

            <div v-if="loading" class="col-span-2 text-center py-4">
              <span class="loading loading-spinner"></span>
              Loading products...
            </div>

            <div
              v-else-if="error"
              class="col-span-2 text-red-500 bg-red-50 rounded-lg p-4"
            >
              {{ error }}
            </div>

            <template v-else>
              <ProductCard
                v-for="product in products"
                :key="product.sku"
                :product="product"
              />
            </template>
          </div>
        </div>

        <!-- Right Column: Summary -->
        <div class="lg:col-span-4">
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-lg font-medium">Summary</h2>
              <span class="text-gray-500"
                >({{ summaryData?.items.length ?? 0 }} items)</span
              >
            </div>

            <div class="space-y-4">
              <div
                v-for="product in summaryData?.items"
                :key="product.sku"
                class="space-y-2"
              >
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <div class="text-sm font-medium mb-2">
                      {{ product.name }}
                    </div>
                    <div
                      class="flex items-center gap-2 bg-gray-100 rounded-md px-2 py-1 w-fit"
                    >
                      <button
                        @click="updateQuantity(product.sku, false)"
                        class="w-6 h-6 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span class="text-sm w-4 text-center">{{
                        product.quantity
                      }}</span>
                      <button
                        @click="updateQuantity(product.sku, true)"
                        class="w-6 h-6 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-col items-end">
                    <span class="text-sm font-medium"
                      >₱{{ product.currentPrice.toFixed(2) }}</span
                    >
                    <span class="text-sm text-gray-400 line-through">
                      ₱{{ product.originalPrice.toFixed(2) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-2 mt-4 pt-4 border-t border-gray-200">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Subtotal</span>
                <span>₱{{ summaryData?.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Promo Discount</span>
                <span class="text-red-500"
                  >-₱{{ summaryData?.promoDiscount.toFixed(2) }}</span
                >
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Doctor's Points Earned</span>
                <span>{{ summaryData?.doctorsPointsEarned }} pts.</span>
              </div>
            </div>

            <div class="mt-4">
              <input
                type="text"
                placeholder="Doctor's Code"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>

            <div class="mt-4 pt-4 border-t border-gray-200">
              <div class="flex justify-between items-center mb-4">
                <span class="font-medium">Total</span>
                <span class="font-medium"
                  >₱{{ summaryData?.total.toFixed(2) }}</span
                >
              </div>

              <div class="grid grid-cols-2 gap-4">
                <button
                  class="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Cancel
                </button>
                <button
                  class="px-4 py-2.5 bg-yellow-400 rounded-lg hover:bg-yellow-500 text-sm"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "~/components/dashboard/DashboardHeader.vue";
import ProductCard from "~/components/summary/ProductCard.vue";
import ProductSearch from "~/components/summary/ProductSearch.vue";
import { useProducts } from "~/composables/useProducts";
const { products, loading, error, summaryData, fetchProducts, updateQuantity } =
  useProducts();

onMounted(() => {
  fetchProducts();
});

const handleSearch = (query: string) => {
  console.log("Searching for:", query);
};
</script>