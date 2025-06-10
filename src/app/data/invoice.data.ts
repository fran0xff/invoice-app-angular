import { Invoice } from "../models/invoice";


export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Juan',
        lastname: 'Pérez',
        adress: {
            country: 'España',
            city: 'Madrid',
            street: 'Calle Mayor',
            number: 123, 
        }
    },
    company: {
        name: 'Tech Solutions S.L.',
        fiscalNumber: 'B12345678',
    },
    items: [
        {
            id:1,
            product:'Tarjeta Gráfica',
            price: 350.00,
            quantity: 1,
        },
        {
            id:2,
            product:'Procesador Intel i7',
            price: 300.00,
            quantity: 1,
        },
        {
            id:3,
            product:'Placa Base',
            price: 150.00,
            quantity: 1,
        },
        {
            id:4,
            product:'Memoria RAM 16GB',
            price: 80.00,
            quantity: 2,
        },
        {
            id:5,
            product:'Disco Duro SSD 1TB',
            price: 100.00,
            quantity: 1,
        }
    ]
}