import type { FreebiesResponse } from '~/types/inventory'

export default defineEventHandler((): FreebiesResponse => {
    return {
        items: [
            {
                id: 1,
                name: 'Sample Medicine Pack',
                code: 'SMP',
                quantity: 50,
                price: 0,
                stock: 0
            },
            {
                id: 2,
                name: 'Promotional Items',
                code: 'PROMO',
                quantity: 100,
                price: 0,
                stock: 30
            },
            {
                id: 3,
                name: 'Medical Supplies',
                code: 'MED',
                quantity: 150,
                price: 0,
                stock: 90
            }
        ]
    }
})