import { InvestmentEntity } from './investment.entity';
import { InvoiceEntity } from './invoice.entity';

export interface UserEntity {
  id: string;
  email: string;
  password: string;
  type: string;
  name: string;
  transactions: InvoiceEntity[];
  investments: InvestmentEntity;
}
