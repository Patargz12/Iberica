`<template>
  <div class="bg-gradient min-h-screen">
    <DashboardHeader />
    <div class="p-4">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-2">
          <NuxtLink to="/Dashboard" class="p-2 flex items-center space-x-4">
            <Icon name="heroicons:arrow-left" class="w-8 h-8" />
            <h1 class="text-h2 font-bold">Coupons</h1>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-2 mr-6">
          <button class="p-3 rounded-lg bg-gray-50 shadow-md">
            <Icon name="heroicons:arrows-up-down" class="w-6 h-6" />
          </button>
          <button class="p-3 rounded-lg bg-gray-50 shadow-md">
            <Icon name="heroicons:funnel" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center mt-10">
        <span class="text-lg font-medium">Loading Coupons...</span>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center mt-10 text-red-600">
        <span class="text-lg font-medium"
          >Failed to load coupons: {{ error.message }}</span
        >
      </div>

      <!-- Active Coupons -->
      <section v-if="!pending && !error" class="mb-6 px-8">
        <h2 class="text-h3 font-semibold mb-6">Active</h2>
        <div class="grid grid-cols-3 gap-3">
          <CouponTicket
            v-for="coupon in activeCoupons"
            :key="coupon.id"
            v-bind="coupon"
            @read-more="showCouponDetails(coupon)"
          />
        </div>
      </section>

      <!-- Expired Coupons -->
      <section v-if="!pending && !error" class="px-8">
        <h2 class="text-h3 font-semibold mb-6">Expired</h2>
        <div class="grid grid-cols-3 gap-3">
          <CouponTicket
            v-for="coupon in expiredCoupons"
            :key="coupon.id"
            v-bind="coupon"
            status="expired"
            @read-more="showCouponDetails(coupon)"
          />
        </div>
      </section>

      <!-- Coupon Details Modal -->
      <CouponDetailsModal
        v-if="selectedCoupon"
        v-model="isModalOpen"
        :coupon="selectedCoupon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "~/components/dashboard/DashboardHeader.vue";
import CouponDetailsModalModal from "~/components/coupon/CouponDetailsModal.vue";

const {
  activeCoupons,
  expiredCoupons,
  pending,
  error,
  selectedCoupon,
  isModalOpen,
  showCouponDetails,
} = useCoupons();
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
</style>`