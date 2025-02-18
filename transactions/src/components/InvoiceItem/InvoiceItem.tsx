import { EditIcon } from '../../icons/EditIcon';
import { TrashIcon } from '../../icons/TrashIcon';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import './InvoiceItem.css'

export type InvoiceItemProps = {
    id: string;
    type: string;
    value: number;
    date: string;
};


export default function InvoiceItem ({id, type, value, date}: InvoiceItemProps) {
    return (
      <div>
        <small className="invoice-month font-bold">Mês</small>
        <div className='invoice-info'>
          <p className='invoice-p'>{type}</p>
          <div className='invoice-buttons'>
            <ButtonIcon Icon={EditIcon}/>
            <ButtonIcon Icon={TrashIcon}/>
          </div>
        </div>
        <div className='invoice-info invoice-p'>
          <p className="font-bold">R$ {value}</p>
          <small className="invoice-date">{date}</small>   
        </div>
      </div>
    );
  };
  