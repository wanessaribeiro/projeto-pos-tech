import React, { useEffect, useState } from 'react';
import Transferences from 'transactions/transferences';
import { useInvoiceProvider } from '../../../../infrastructure/contexts/InvoiceContext';
import { InvoiceEntity } from '../../../../domain/entities/invoice.entity';

export default function TransferencesPage() {
  const { invoices } = useInvoiceProvider();
  const [transferences, setTransferences] = useState<InvoiceEntity[]>([]);

  useEffect(() => {
    setTransferences([]);

    invoices.forEach((invoice) => {
      if (invoice.type === 'DOC/TED' || invoice.type === 'Pix')
        setTransferences((prev) => [invoice, ...prev]);
    });
  }, [invoices]);

  return <Transferences transferences={transferences} />;
}
