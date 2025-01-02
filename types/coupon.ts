export interface Coupon {
    id: number
    title: string
    code: string
    description: string
    validity: string
    color: string
}

export interface CouponsResponse {
    active: Coupon[]
    expired: Coupon[]
}