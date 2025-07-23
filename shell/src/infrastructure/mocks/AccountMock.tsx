import { UserEntity } from '../../domain/entities/user.entity';
import { investmentsMock } from './InvestmentsMock';
import { invoicesMock } from './InvoiceMock';

export const accountMock: UserEntity = {
  id: '1010',
  email: 'joananaves@email.com',
  type: 'Conta Corrente',
  name: 'Joana Naves',
  transactions: invoicesMock,
  investments: investmentsMock,
};
