import EditTransaction from 'transactions/edit-transaction'
import { useInvoiceProvider } from '../../../context/InvoiceContext';
import { useTransferenceProvider } from '../../../context/TransferencesContext';

export default function EditTransactionPage () {
    const {selectedInvoice, usePatchInvoice} = useInvoiceProvider();
    const {usePatchTransference} = useTransferenceProvider();

  return (
    <EditTransaction selectedTransaction={selectedInvoice} patchInvoice={usePatchInvoice} patchTransference={usePatchTransference} />
  );
};
