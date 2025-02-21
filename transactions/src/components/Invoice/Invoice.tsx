import { InvoiceType } from '../../libs/types';
import InvoiceItem from '../InvoiceItem/InvoiceItem';
import './Invoice.css'

interface InvoiceProps{
  invoices: InvoiceType;
  setPage: (page: string) => void;
  setSelectedTransaction: (invoice: InvoiceType) => void;
}


export default function Invoice ({invoices, setPage, setSelectedTransaction}: InvoiceProps) {

  const EditInvoice = (invoice: InvoiceType) => {
    setSelectedTransaction(invoice)
    setPage('Edit')
  }

  return (
    <div className="border-round invoice-body">
      <div>
        <h1 className="txt-black">Extrato</h1>
      </div>
      <ul>
        {invoices?.map((invoice) => (
          <li className='invoice-li' key={invoice.id}>
            <InvoiceItem key={invoice.id} id={invoice.id} type={invoice.type} value={invoice.value} date={invoice.date} onClickDelete={()=>{}} onClickEdit={() => EditInvoice(invoice)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

