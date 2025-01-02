import { ref, Ref } from 'vue'
import type { Product, SummaryData } from '~/types/product'

export const useProducts = () => {
    const products: Ref<Product[]> = ref([])
    const loading = ref(false)
    const error = ref<string | null>(null)
    const summaryData = ref<SummaryData | null>(null)

    const calculateSummary = () => {
        if (!products.value) return

        const items = products.value.filter(product => product.quantity > 0)
        const subtotal = items.reduce((sum, product) =>
            sum + (product.currentPrice * (product.quantity || 0)), 0)

        summaryData.value = {
            items,
            subtotal,
            promoDiscount: 184.00,
            doctorsPointsEarned: 155,
            total: subtotal - 184.00
        }
    }

    const fetchProducts = async () => {
        loading.value = true
        error.value = null

        try {
            const data = await $fetch('/api/products')
            console.log("FETCHING DATAAAAA: ", data)
            products.value = data as Product[] || []

            calculateSummary()
        } catch (e) {
            error.value = 'Failed to fetch products. Please try again.'
            console.error('Error fetching products:', e)
        } finally {
            loading.value = false
        }
    }

    const updateQuantity = (sku: string, increment: boolean) => {
        const product = products.value.find(p => p.sku === sku)
        if (product) {
            product.quantity = increment
                ? product.quantity + 1
                : Math.max(0, product.quantity - 1)
            calculateSummary()
        }
    }

    return {
        products,
        loading,
        error,
        summaryData,
        fetchProducts,
        updateQuantity
    }
}