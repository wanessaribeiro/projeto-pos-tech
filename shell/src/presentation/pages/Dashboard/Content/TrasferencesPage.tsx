import React from 'react';
import Transferences from 'transactions/transferences';
import { useTransferenceProvider } from '../../../../infrastructure/contexts/TransferencesContext';

export default function TransferencesPage() {
  const { transferences } = useTransferenceProvider();

  return <Transferences transferences={transferences} />;
}
