import Transferences from 'transactions/transferences';
import { useTransferenceProvider } from '../../../context/TransferencesContext';

export default function TransferencesPage() {
  const { transferences } = useTransferenceProvider();

  return <Transferences transferences={transferences} />;
}
