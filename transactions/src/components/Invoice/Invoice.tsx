import { useNavigate } from "react-router";
import { useEffect } from 'react';
import { InvoiceType } from '../../libs/types';
import InvoiceItem from '../InvoiceItem/InvoiceItem';
import './Invoice.css'

interface InvoiceProps{
  invoices: InvoiceType[];
  setSelectedTransaction: (invoice: InvoiceType) => void;
  deleteTransaction: (id: string) => void;
  deleteTransference: (id: string) => void;
  balance: number;
  setBalance: (balance: number) => void;
}


export default function Invoice ({invoices, setSelectedTransaction, deleteTransaction, deleteTransference, balance, setBalance}: InvoiceProps) {
  const navigate = useNavigate();
  const deleteInvoice = (id: string) => {
    deleteTransference(id)
    deleteTransaction(id)
    setBalance(getTotalInvoices())
  }

  const editInvoice = (invoice: InvoiceType) => {
    setSelectedTransaction(invoice)
    setBalance(getTotalInvoices())
    navigate('/dashboard/edit')
  }

  const getTotalInvoices = () => {
    const total = invoices.reduce((acc, invoice) => {
      if (invoice.type === "Depósito") {
        return acc + invoice.value;
      } else if (invoice.type === "Saque" || invoice.type === "Transferência") {
        return acc - invoice.value;
      }
      return acc;
    }, 0);
    const currentBalance = balance;
    return currentBalance + total;
  };

  useEffect(() => {
    setBalance(getTotalInvoices())
  }, [])

  return (
    <div className="border-round invoice-body">
      <div>
        <h1 className="txt-black">Extrato</h1>
      </div>
      <ul>
        {invoices?.map((invoice) => (
          <li className='invoice-li' key={invoice.id}>
            <InvoiceItem key={invoice.id} type={invoice.type} value={invoice.value} date={invoice.date} onClickDelete={()=> deleteInvoice(invoice.id)} onClickEdit={() => editInvoice(invoice)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

