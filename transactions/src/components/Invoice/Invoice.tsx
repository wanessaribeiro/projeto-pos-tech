import InvoiceItem from '../InvoiceItem/InvoiceItem';
import './Invoice.css'

export default function Invoice () {
  const invoices = [
    { id: "1111", type: 'deposito', value: 500, date: '12/06/1999'},
    { id: "1111", type: 'deposito', value: 500, date: '12/06/1999'},
  ];
  return (
    <div className="border-round invoice-body">
      <div>
        <h1 className="txt-black">Extrato</h1>
      </div>
      <ul>
        {invoices?.map((invoice) => (
          <li className='invoice-li' key={invoice.id}>
            <InvoiceItem key={invoice.id} id={invoice.id} type={invoice.type} value={invoice.value} date={invoice.date}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

