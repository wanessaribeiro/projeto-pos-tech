import React from 'react';
import NewTransaction from 'transactions/new-transaction';
import { useAccountProvider } from '../../../../infrastructure/contexts/AccountContext';
import { useInvoiceProvider } from '../../../../infrastructure/contexts/InvoiceContext';

export default function NewTransactionPage() {
  const { usePostInvoice } = useInvoiceProvider();
  const { balance, setBalance } = useAccountProvider();

  return (
    <NewTransaction
      postInvoice={usePostInvoice}
      balance={balance}
      setBalance={setBalance}
    />
  );
}
