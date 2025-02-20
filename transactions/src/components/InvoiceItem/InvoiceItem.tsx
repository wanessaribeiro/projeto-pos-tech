import { EditIcon } from '../../icons/EditIcon';
import { TrashIcon } from '../../icons/TrashIcon';
import { months } from '../../libs/consts';
import { formatDate } from '../../libs/shared-functions';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import './InvoiceItem.css'

export type InvoiceItemProps = {
  id: string;
  type: string;
  value: number;
  date: Date;
};


export default function InvoiceItem ({id, type, value, date}: InvoiceItemProps) {
    return (
      <div>
        <small className="invoice-month font-bold">{months[date.getMonth()]}</small>
        <div className='invoice-info'>
          <p className='invoice-p'>{type}</p>
          <div className='invoice-buttons'>
            <ButtonIcon Icon={EditIcon}/>
            <ButtonIcon Icon={TrashIcon}/>
          </div>
        </div>
        <div className='invoice-info invoice-p'>
          <p className="font-bold">R$ {value}</p>
          <small className="invoice-date">{formatDate(date)}</small>   
        </div>
      </div>
    );
  };
  