import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    try {
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock response data with actual barcode images
        return {
            items: [
                {
                    sku: '092293819201',
                    name: 'Nuropat Tablet Vitamins',
                    price: 36.00,
                    originalPrice: 50.00,
                    barcodeImage: '/barcode_img.png',
                },
            ],
        };
    } catch (error) {
        console.error('Error occurred:', error);
        return { error: 'Failed to fetch data. Please try again.' };
    }
});
