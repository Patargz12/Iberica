export const useInventoryData = () => {
    const botikaItems = [
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

    const freebieItems = [
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

    return {
        botikaItems,
        freebieItems
    }
}