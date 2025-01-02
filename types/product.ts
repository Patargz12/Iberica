export interface Product {
    id: string;
    sku: string;
    name: string;
    subtitle?: string;
    currentPrice: number;
    originalPrice: number;
    quantity: number;
    image: string;
}
export interface SummaryData {
    items: Product[];
    subtotal: number;
    promoDiscount: number;
    doctorsPointsEarned: number;
    total: number;
}