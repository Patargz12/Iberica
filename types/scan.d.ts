export interface ScanItem {
    sku: string
    name: string
    price: number
    originalPrice: number
    barcodeImage: string
}

export interface ScanData {
    items: ScanItem[]
    subtotal: number
    promoDiscount: number
    pointsEarned: number
    total: number
}

export interface ScanConfirmation {
    scanData: ScanData
    doctorCode: string
}