// Common inventory item interface
export interface BaseInventoryItem {
    id: number
    name: string
    code: string
    quantity: number
    stock: number
}

// Botika specific item interface
export interface BotikaItem extends BaseInventoryItem {
    price: number
}

// Freebies specific item interface
export interface FreebieItem extends BaseInventoryItem {
    price: 0
}

// API response interfaces
export interface BotikaResponse {
    items: BotikaItem[]
}

export interface FreebiesResponse {
    items: FreebieItem[]
}