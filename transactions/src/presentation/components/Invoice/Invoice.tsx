import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { InvoiceType } from '../../../domain/shared/types';
import InvoiceItem from '../InvoiceItem/InvoiceItem';
import './Invoice.css';

interface InvoiceProps {
  invoices: InvoiceType[];
  setSelectedTransaction: (invoice: InvoiceType) => void;
  deleteTransaction: (id: string) => void;
  setTotalBalance: (invoices: InvoiceType[]) => void;
}

export default function Invoice({
  invoices,
  setSelectedTransaction,
  deleteTransaction,
  setTotalBalance,
}: InvoiceProps) {
  const navigate = useNavigate();
  const deleteInvoice = (id: string) => {
    deleteTransaction(id);
    setTotalBalance(invoices);
  };

  const editInvoice = (invoice: InvoiceType) => {
    setSelectedTransaction(invoice);
    navigate('/dashboard/edit');
  };

  useEffect(() => {
    setTotalBalance(invoices);
  }, [invoices]);

  return (
    <div className="border-round invoice-body">
      <div>
        <h1 className="txt-black">Extrato</h1>
      </div>
      <ul>
        {invoices?.map((invoice) => (
          <li className="invoice-li" key={invoice.id}>
            <InvoiceItem
              key={invoice.id}
              type={invoice.type}
              value={invoice.value}
              date={invoice.date}
              onClickDelete={() => deleteInvoice(invoice.id)}
              onClickEdit={() => editInvoice(invoice)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
