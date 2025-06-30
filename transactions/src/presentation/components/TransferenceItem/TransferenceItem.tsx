import React from 'react';
import { formatDate } from '../../../domain/shared/functions';

export type TransferenceItemProps = {
  transferenceType: string;
  value: number;
  date: Date;
};

export default function TransferenceItem({
  transferenceType,
  value,
  date,
}: TransferenceItemProps) {
  return (
    <tr>
      <td>{transferenceType}</td>
      <td>R${value}</td>
      <td>{formatDate(date)}</td>
    </tr>
  );
}
