import React, { useEffect } from 'react';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { InvoiceEntity } from '../../domain/entities/invoice.entity';
import { invoicesMock } from '../mocks/InvoiceMock';
import PostCreateTransactionService from '../services/Transactions/PostCreateTransactionService';
import { useAccountProvider } from './AccountContext';
import PutEditTransactionService from '../services/Transactions/PutEditTransactionService';

const InvoiceContext = createContext<
  | {
      invoices: InvoiceEntity[];
      selectedInvoice: InvoiceEntity | undefined;
      setSelectedInvoice: Dispatch<SetStateAction<InvoiceEntity>>;
      useGetInvoice: (id: string) => InvoiceEntity | undefined;
      usePostInvoice: (invoice: InvoiceEntity) => void;
      usePatchInvoice: (invoice: InvoiceEntity) => void;
      useDeleteInvoice: (id: string) => void;
    }
  | undefined
>(undefined);

export function InvoiceProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { account } = useAccountProvider();

  const [invoices, setInvoices] = useState<InvoiceEntity[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState({
    id: '',
    type: 'Saque',
    value: 0,
    date: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('biteBankToken');

    if (token) setInvoices(account.transactions);
  }, [account]);

  const useGetInvoice = (id: string) => {
    const invoice = invoicesMock.find((i) => i.id === id);
    return invoice;
  };

  const usePostInvoice = (invoice: InvoiceEntity) => {
    setInvoices((prev) => {
      return [invoice, ...prev];
    });

    PostCreateTransactionService({
      token: localStorage.getItem('biteBankToken') ?? '',
      transactionId: invoice.id,
      userId: account.id,
      type: invoice.type,
      value: invoice.value,
    });
  };

  const usePatchInvoice = (invoice: InvoiceEntity) => {
    setInvoices((prev) => {
      const editInvoice = prev.find((i) => i.id === invoice.id);
      if (editInvoice) Object.assign(editInvoice, invoice);
      return prev;
    });

    PutEditTransactionService({
      token: localStorage.getItem('biteBankToken') ?? '',
      userId: account.id,
      transactionId: invoice.id,
      type: invoice.type,
      value: invoice.value,
    });
  };

  const useDeleteInvoice = (id: string) => {
    setInvoices((prev) => {
      const updatedInvoices = [...prev];
      const deleteInvoice = updatedInvoices.findIndex((i) => i.id === id);
      if (deleteInvoice >= 0) updatedInvoices.splice(deleteInvoice, 1);
      return updatedInvoices;
    });
  };

  return (
    <InvoiceContext.Provider
      value={{
        selectedInvoice,
        setSelectedInvoice,
        useGetInvoice,
        usePostInvoice,
        usePatchInvoice,
        useDeleteInvoice,
        invoices,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoiceProvider() {
  const context = useContext(InvoiceContext);
  if (!context) throw new Error('Invalid InvoiceContext');
  return context;
}
