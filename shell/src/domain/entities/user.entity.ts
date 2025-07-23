import { InvestmentEntity } from './investment.entity';
import { InvoiceEntity } from './invoice.entity';

export interface UserEntity {
  id: string;
  email: string;
  type: string;
  name: string;
  transactions: InvoiceEntity[];
  investments: InvestmentEntity;
}
