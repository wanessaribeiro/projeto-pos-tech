import React from 'react';
import EditTransaction from 'transactions/edit-transaction';
import { useInvoiceProvider } from '../../../../infrastructure/contexts/InvoiceContext';
import { useTransferenceProvider } from '../../../../infrastructure/contexts/TransferencesContext';

export default function EditTransactionPage() {
  const { selectedInvoice, usePatchInvoice } = useInvoiceProvider();
  const { usePatchTransference } = useTransferenceProvider();

  return (
    <EditTransaction
      selectedTransaction={selectedInvoice}
      patchInvoice={usePatchInvoice}
      patchTransference={usePatchTransference}
    />
  );
}
