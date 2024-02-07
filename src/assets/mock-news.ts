import { News } from "../domain/news";

export const NEWS: News[] = [
    {   
        id: 1, 
        reference: 'NEWS240001', 
        writer: 'DI SILVESTRE Cristina', 
        creation_date: new Date(), 
        publication_date: new Date(), 
        category: 'TEST',
        title: 'Title 01',
        payload: 'test'
    },
    { 
        id: 2, 
        reference: 'NEWS240002', 
        writer: 'TENTARELLI Edoardo', 
        creation_date: new Date(), 
        publication_date: new Date(), 
        category: 'TEST', 
        title: 'Title 02',
        payload: 'test' 
    },
    { 
        id: 3, 
        reference: 'NEWS240003', 
        writer: 'TENTARELLI Edoardo', 
        creation_date: new Date(), 
        publication_date: new Date(), 
        category: 'TEST', 
        title: 'Title 03',
        payload: 'test' 
    },
    { 
        id: 4, 
        reference: 'NEWS240004', 
        writer: 'GRASSO Giulio', 
        creation_date: new Date(), 
        publication_date: new Date(), 
        category: 'TEST', 
        title: 'Title 04',
        payload: 'test' 
    },
    { 
        id: 5, 
        reference: 'NEWS240005', 
        writer: 'PRECONE Marianna', 
        creation_date: new Date(), 
        publication_date: new Date(), 
        category: 'TEST', 
        title: 'Title 05',
        payload: 'test' 
    }
];