<template>
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
          <button class="p-2 rounded-lg bg-gray-100">
            <Icon name="heroicons:arrows-up-down" class="w-6 h-6" />
          </button>
          <button class="p-2 rounded-lg bg-gray-100">
            <Icon name="heroicons:funnel" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Active Coupons -->
      <section class="mb-6 px-8">
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
      <section class="px-8">
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
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from "~/components/dashboard/DashboardHeader.vue";

const activeCoupons = ref([
  {
    id: 1,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#E2325C",
  },
  {
    id: 2,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#22C55E",
  },
  {
    id: 3,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#6366F1",
  },
  {
    id: 4,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#F59E0B",
  },
  {
    id: 5,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#06B6D4",
  },
  {
    id: 6,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#3B82F6",
  },
]);

const expiredCoupons = ref([
  {
    id: 7,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#71717a",
  },
  {
    id: 8,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#71717a",
  },
  {
    id: 9,
    title: "Iberica 20% off!",
    code: "IVP20OFF",
    validity: "Anytime",
    color: "#71717a",
  },
]);

const showCouponDetails = (coupon) => {
  console.log("Show details for coupon:", coupon);
};
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