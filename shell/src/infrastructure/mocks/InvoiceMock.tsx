import { InvoiceEntity } from '../../domain/entities/invoice.entity';

export const invoicesMock: InvoiceEntity[] = [
  {
    id: '4',
    type: 'Saque',
    value: 600.0,
    date: new Date(
      'Sat Oct 19 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)',
    ),
  },
  {
    id: '3',
    type: 'Pix',
    value: 250.0,
    date: new Date(
      'Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)',
    ),
  },
  {
    id: '2',
    type: 'DOC/TED',
    value: 300.0,
    date: new Date(
      'Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)',
    ),
  },
  {
    id: '1',
    type: 'Depósito',
    value: 300.0,
    date: new Date(
      'Mon Apr 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)',
    ),
  },
];
