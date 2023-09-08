export interface Mission {
    id: number,
    reference: string,
    expert: string,
    sign_date?: Date,
    closure_date?: Date,
    type?: string,
    damage_cost?: number,
    service_fee?: number,
    total?: number
}