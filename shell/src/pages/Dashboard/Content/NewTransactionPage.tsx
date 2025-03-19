import NewTransaction from 'transactions/new-transaction'
import { useInvoiceProvider } from '../../../context/InvoiceContext';
import { useAccountProvider } from '../../../context/AccountContext';
import { useTransferenceProvider } from '../../../context/TransferencesContext';

export default function NewTransactionPage () {
    const {usePostInvoice} = useInvoiceProvider();
    const {balance, setBalance} = useAccountProvider();
    const {usePostTransference} = useTransferenceProvider();
    

  return (
    <NewTransaction postInvoice={usePostInvoice} balance={balance} setBalance={setBalance} postTransference={usePostTransference}/>
  );
};
