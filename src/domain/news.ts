export interface News {
    id: number,
    reference: string,
    writer: string,
    creation_date: Date,
    publication_date: Date,
    category: string,
    title: string,
    payload: string
}