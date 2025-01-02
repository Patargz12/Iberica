import type { BotikaItem, FreebieItem } from '~/types/inventory'

export const useInventoryData = () => {
    const { data: botikaData, pending: botikaPending, error: botikaError } =
        useFetch<{ items: BotikaItem[] }>('/api/inventory/botika')

    const { data: freebiesData, pending: freebiesPending, error: freebiesError } =
        useFetch<{ items: FreebieItem[] }>('/api/inventory/freebies')

    const botikaItems = computed(() => botikaData.value?.items ?? [])
    const freebieItems = computed(() => freebiesData.value?.items ?? [])

    const isLoading = computed(() => botikaPending.value || freebiesPending.value)
    const hasError = computed(() => botikaError.value || freebiesError.value)

    return {
        botikaItems,
        freebieItems,
        isLoading,
        hasError
    }
}