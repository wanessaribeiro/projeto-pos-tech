import { InvoiceType } from '../../libs/types';
import InvoiceItem from '../InvoiceItem/InvoiceItem';
import './Invoice.css'

interface InvoiceProps{
  invoices: InvoiceType;
  setPage: (page: string) => void;
}


export default function Invoice ({invoices, setPage}: InvoiceProps) {

  const EditInvoice = (id: string) => {
    setPage('Edit')
    console.log(id)
  }

  return (
    <div className="border-round invoice-body">
      <div>
        <h1 className="txt-black">Extrato</h1>
      </div>
      <ul>
        {invoices?.map((invoice) => (
          <li className='invoice-li' key={invoice.id}>
            <InvoiceItem key={invoice.id} id={invoice.id} type={invoice.type} value={invoice.value} date={invoice.date} onClickDelete={()=>{}} onClickEdit={() => EditInvoice(invoice.id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

