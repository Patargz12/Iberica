import type { Coupon, CouponsResponse } from '~/types/coupon'

export const useCoupons = () => {
    const { data, pending, error } = useFetch<CouponsResponse>('/api/coupons')

    const activeCoupons = computed(() => data.value?.active ?? [])
    const expiredCoupons = computed(() => data.value?.expired ?? [])

    // Modal state
    const selectedCoupon = ref<Coupon | null>(null)
    const isModalOpen = ref(false)

    const showCouponDetails = (coupon: Coupon) => {
        selectedCoupon.value = coupon
        isModalOpen.value = true
    }


    return {
        activeCoupons,
        expiredCoupons,
        pending,
        error,
        selectedCoupon,
        isModalOpen,
        showCouponDetails
    }
}