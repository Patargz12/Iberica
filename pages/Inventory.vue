<template>
  <div class="min-h-screen bg-gradient">
    <DashboardHeader />

    <main class="p-8 max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-4">
          <NuxtLink class="text-h1" to="/dashboard">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.2912 5.56813C15.8404 6.11731 15.8404 7.00769 15.2912 7.55687L7.84811 15L15.2912 22.4431C15.8404 22.9923 15.8404 23.8827 15.2912 24.4319C14.7421 24.981 13.8517 24.981 13.3025 24.4319L4.86501 15.9944C4.31583 15.4452 4.31583 14.5548 4.86501 14.0056L13.3025 5.56813C13.8517 5.01896 14.7421 5.01896 15.2912 5.56813Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.625 15C5.625 14.2233 6.2546 13.5938 7.03125 13.5938H24.1406C24.9173 13.5938 25.5469 14.2233 25.5469 15C25.5469 15.7767 24.9173 16.4062 24.1406 16.4062H7.03125C6.2546 16.4062 5.625 15.7767 5.625 15Z"
                fill="black"
              />
            </svg>
          </NuxtLink>
          <h1 class="text-h2 font-bold">Inventory</h1>
        </div>
      </div>
      <div class="flex justify-end mb-8">
        <InventoryToggle v-model="activeView" />
      </div>

      <div class="bg-white p-6" v-if="activeView === 'botika'">
        <InventorySection
          title="Out of Stock"
          :count="outOfStock.length"
          type="out"
        >
          <InventoryItem
            v-for="(item, index) in outOfStock"
            :key="item.id"
            v-bind="item"
            :alternate="index % 2 === 1"
          />
        </InventorySection>

        <InventorySection title="Low Stock" :count="lowStock.length" type="low">
          <InventoryItem
            v-for="(item, index) in lowStock"
            :key="item.id"
            v-bind="item"
            :alternate="index % 2 === 1"
          />
        </InventorySection>

        <InventorySection title="In Stock" :count="inStock.length" type="in">
          <InventoryItem
            v-for="(item, index) in inStock"
            :key="item.id"
            v-bind="item"
            :alternate="index % 2 === 1"
          />
        </InventorySection>
      </div>

      <div v-else class="bg-white p-6">
        <InventorySection
          title="Out of Stock"
          :count="outOfStockFreebies.length"
          type="out"
        >
          <InventoryItem
            v-for="(item, index) in outOfStockFreebies"
            :key="item.id"
            v-bind="item"
            :alternate="index % 2 === 1"
          />
        </InventorySection>

        <InventorySection
          title="Low Stock"
          :count="lowStockFreebies.length"
          type="low"
        >
          <InventoryItem
            v-for="(item, index) in lowStockFreebies"
            :key="item.id"
            v-bind="item"
            :alternate="index % 2 === 1"
          />
        </InventorySection>

        <InventorySection
          title="In Stock"
          :count="inStockFreebies.length"
          type="in"
        >
          <InventoryItem
            v-for="(item, index) in inStockFreebies"
            :key="item.id"
            v-bind="item"
            :alternate="index % 2 === 1"
          />
        </InventorySection>
      </div>
    </main>
  </div>
</template>

<script setup>
import DashboardHeader from "~/components/dashboard/DashboardHeader.vue";
import InventoryItem from "~/components/inventory/InventoryItem.vue";
import InventorySection from "~/components/inventory/InventorySection.vue";
const { botikaItems, freebieItems } = useInventoryData();
const activeView = ref("botika");

// Botika computed properties
const outOfStock = computed(() =>
  botikaItems.filter((item) => item.stock === 0)
);
const lowStock = computed(() =>
  botikaItems.filter((item) => item.stock > 0 && item.stock <= 30)
);
const inStock = computed(() => botikaItems.filter((item) => item.stock > 30));

// Freebies computed properties
const outOfStockFreebies = computed(() =>
  freebieItems.filter((item) => item.stock === 0)
);
const lowStockFreebies = computed(() =>
  freebieItems.filter((item) => item.stock > 0 && item.stock <= 30)
);
const inStockFreebies = computed(() =>
  freebieItems.filter((item) => item.stock > 30)
);
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(
    210deg,
    #fffbbd 0%,
    #ffffff 25%,
    #ffffff 75%,
    #fffcd0 100%
  );
}
</style>




