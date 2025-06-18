import React from 'react';
import NewTransaction from 'transactions/new-transaction';
import { useTransferenceProvider } from '../../../../infrastructure/contexts/TransferencesContext';
import { useAccountProvider } from '../../../../infrastructure/contexts/AccountContext';
import { useInvoiceProvider } from '../../../../infrastructure/contexts/InvoiceContext';

export default function NewTransactionPage() {
  const { usePostInvoice } = useInvoiceProvider();
  const { balance, setBalance } = useAccountProvider();
  const { usePostTransference } = useTransferenceProvider();

  return (
    <NewTransaction
      postInvoice={usePostInvoice}
      balance={balance}
      setBalance={setBalance}
      postTransference={usePostTransference}
    />
  );
}
