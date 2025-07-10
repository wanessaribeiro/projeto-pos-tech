import React from 'react';
import EditTransaction from 'transactions/edit-transaction';
import { useInvoiceProvider } from '../../../../infrastructure/contexts/InvoiceContext';
import { useAccountProvider } from '../../../../infrastructure/contexts/AccountContext';

export default function EditTransactionPage() {
  const { selectedInvoice, usePatchInvoice } = useInvoiceProvider();
  const { setTotalBalance } = useAccountProvider();
  const { invoices } = useInvoiceProvider();

  return (
    <EditTransaction
      invoices={invoices}
      selectedTransaction={selectedInvoice}
      patchInvoice={usePatchInvoice}
      setTotalBalance={setTotalBalance}
    />
  );
}
