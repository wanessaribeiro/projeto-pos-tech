import React from 'react';
import { EditIcon } from '../../../domain/icons/EditIcon';
import { TrashIcon } from '../../../domain/icons/TrashIcon';

import { formatDate } from '../../../domain/shared/functions';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import './InvoiceItem.css';
import { months } from '../../../domain/shared/constants';

export type InvoiceItemProps = {
  type: string;
  value: number;
  date: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
};

export default function InvoiceItem({
  type,
  value,
  date,
  onClickEdit,
  onClickDelete,
}: InvoiceItemProps) {
  return (
    <div>
      <small className="invoice-month font-bold">
        {months[new Date(date).getMonth()]}
      </small>
      <div className="invoice-info">
        <p className="invoice-p">{type}</p>
        <div className="invoice-buttons">
          <ButtonIcon Icon={EditIcon} onClickIcon={onClickEdit} />
          <ButtonIcon Icon={TrashIcon} onClickIcon={onClickDelete} />
        </div>
      </div>
      <div className="invoice-info invoice-p">
        <p className="font-bold">{value.toFixed(2)}</p>
        <small className="invoice-date">{formatDate(new Date(date))}</small>
      </div>
    </div>
  );
}
