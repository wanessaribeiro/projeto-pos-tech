import React from 'react';
import './EditTransaction.css';
import { useNavigate } from 'react-router';
import pixels3 from '../../images/Pixels3.png';
import pixels4 from '../../images/Pixels4.png';
import personWithCard from '../../images/PersonWithCard.png';
import TransactionDropdown from '../TransactionDropdown/TransactionDropdown';
import { InvoiceType } from '../../../domain/shared/types';
import { useEffect, useState } from 'react';

export type EditTransactionProps = {
  selectedTransaction: InvoiceType;
  patchInvoice: (invoice: InvoiceType) => void;
  patchTransference: (transference: InvoiceType) => void;
};

export default function EditTransaction({
  selectedTransaction,
  patchInvoice,
  patchTransference,
}: EditTransactionProps) {
  const navigate = useNavigate();
  const [editInvoice, setEditInvoice] = useState(selectedTransaction);

  useEffect(() => {
    setEditInvoice(selectedTransaction);
  }, [selectedTransaction]);

  const onChangeType = (value: string) => {
    setEditInvoice((prev) => ({ ...prev, type: value }));
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setEditInvoice((prev) => ({ ...prev, value: Number(value) }));
    }
  };

  const updateInvoice = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editInvoice.type || editInvoice.value === 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    patchTransference(editInvoice);
    patchInvoice(editInvoice);
    navigate('/dashboard');
  };

  return (
    <div className="transaction-body container border-round">
      <img src={pixels3} className="img-3" />
      <img src={pixels4} className="img-4" />
      <img src={personWithCard} className="img-person-with-card" />
      <div className="inner-div">
        <h1>Editar Transação</h1>
        <form onSubmit={updateInvoice}>
          <TransactionDropdown
            selected={editInvoice.type}
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
              value={editInvoice.value}
              onChange={onChangeValue}
            />
          </div>
          <button type="submit" className="transaction-button">
            Concluir Edição
          </button>
        </form>
      </div>
    </div>
  );
}
