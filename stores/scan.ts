import { defineStore } from 'pinia'
import type { ScanData, ScanConfirmation } from '~/types/scan'

const defaultScanData: ScanData = {
    items: [],
    subtotal: 0,
    promoDiscount: 0,
    pointsEarned: 0,
    total: 0
}

export const useScanStore = defineStore('scan', {
    state: () => ({
        scanData: defaultScanData as ScanData,
        loading: false,
        error: null as string | null,
    }),

    getters: {
        getScanData: (state) => state.scanData,
        isLoading: (state) => state.loading,
        getError: (state) => state.error,
    },

    actions: {
        async processScan() {
            this.loading = true
            this.error = null

            try {
                const response = await $fetch<ScanData>('/api/scan/process')
                this.scanData = response
            } catch (error) {
                this.error = 'Failed to process scan'
                throw error
            } finally {
                this.loading = false
            }
        },

        async confirmScan(doctorCode: string) {
            this.loading = true
            this.error = null

            try {
                await $fetch('/api/scan/confirm', {
                    method: 'POST',
                    body: {
                        scanData: this.scanData,
                        doctorCode,
                    } as ScanConfirmation,
                })
            } catch (error) {
                this.error = 'Failed to confirm scan'
                throw error
            } finally {
                this.loading = false
            }
        },
    },
})