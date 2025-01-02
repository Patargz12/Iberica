import type { BotikaResponse } from '~/types/inventory'

export default defineEventHandler((): BotikaResponse => {
    return {
        items: [
            {
                id: 1,
                name: 'Losartan Potassium Amlodipine Besilate',
                code: 'LPAB',
                quantity: 200,
                price: 300000,
                stock: 0
            },
            {
                id: 2,
                name: 'Losartan Potassium Amlodipine Besilate',
                code: 'LPAB',
                quantity: 200,
                price: 300000,
                stock: 0
            },
            {
                id: 3,
                name: 'Losartan Potassium Amlodipine Besilate',
                code: 'LPAB',
                quantity: 200,
                price: 300000,
                stock: 30
            },
            {
                id: 4,
                name: 'Losartan Potassium Amlodipine Besilate',
                code: 'LPAB',
                quantity: 200,
                price: 300000,
                stock: 90
            }
        ]
    }
})