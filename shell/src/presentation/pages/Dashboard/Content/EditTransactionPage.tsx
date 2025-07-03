import React from 'react';
import EditTransaction from 'transactions/edit-transaction';
import { useInvoiceProvider } from '../../../../infrastructure/contexts/InvoiceContext';

export default function EditTransactionPage() {
  const { selectedInvoice, usePatchInvoice } = useInvoiceProvider();

  return (
    <EditTransaction
      selectedTransaction={selectedInvoice}
      patchInvoice={usePatchInvoice}
    />
  );
}
