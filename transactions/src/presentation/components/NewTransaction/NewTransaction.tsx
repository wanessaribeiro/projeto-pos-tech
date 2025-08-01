import React from 'react';
import { useState } from 'react';
import './NewTransaction.css';
import { v4 as uuidv4 } from 'uuid';
import pixels3 from '../../../domain/images/Pixels3.png';
import pixels4 from '../../../domain/images/Pixels4.png';
import personWithCard from '../../../domain/images/PersonWithCard.png';
import TransactionDropdown from '../TransactionDropdown/TransactionDropdown';
import { InvoiceType } from '../../../domain/shared/types';

interface InvoiceProps {
  invoices: InvoiceType[];
  postInvoice: (invoice: InvoiceType) => void;
  setTotalBalance: (invoices: InvoiceType[]) => void;
}

export default function NewTransaction({
  invoices,
  postInvoice,
  setTotalBalance,
}: InvoiceProps) {
  const [newInvoice, setNewInvoice] = useState({
    id: uuidv4(),
    type: '',
    value: 0,
    date: new Date() + '',
  });

  const onChangeType = (value: string) => {
    setNewInvoice((prev) => ({ ...prev, type: value }));
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setNewInvoice((prev) => ({ ...prev, value: Number(value) }));
    }
  };

  const createInvoice = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newInvoice.type || newInvoice.value === 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    postInvoice(newInvoice);
    setTotalBalance(invoices);
    setNewInvoice({
      id: uuidv4(),
      type: '',
      value: 0,
      date: new Date() + '',
    });
  };

  return (
    <div className="transaction-body container border-round">
      <img src={pixels3} className="img-3" />
      <img src={pixels4} className="img-4" />
      <img src={personWithCard} className="img-person-with-card" />
      <div className="inner-div">
        <h1>Nova Transação</h1>
        <form onSubmit={createInvoice}>
          <TransactionDropdown
            selected={newInvoice.type}
            setSelected={onChangeType}
            options={['Depósito', 'Saque', 'DOC/TED', 'Pix']}
            placeholder="Selecione o tipo de transação"
          ></TransactionDropdown>
          <div className="transaction-value">
            <p className="font-bold">Valor</p>
            <input
              id="transaction-value"
              name="transaction-value"
              type="numeric"
              step="0.01"
              placeholder="0"
              value={newInvoice.value}
              onChange={onChangeValue}
            />
          </div>
          <button type="submit" className="transaction-button">
            Concluir Transação
          </button>
        </form>
      </div>
    </div>
  );
}
