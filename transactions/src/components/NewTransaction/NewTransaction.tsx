import { useState } from 'react';
import './NewTransaction.css'
import { v4 as uuidv4 } from "uuid";
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import personWithCard from '../../images/PersonWithCard.png'
import TransactionDropdown from '../TransactionDropdown/TransactionDropdown';
import { InvoiceType } from '../../libs/types';

interface InvoiceProps{
  postInvoice: (invoice: InvoiceType) => void;
  postTransference: (transference: InvoiceType) => void;
  balance: number;
  setBalance: (balance: number) => void;
}

export default function NewTransaction({postInvoice, postTransference, balance, setBalance}:InvoiceProps) {
    const [newInvoice, setNewInvoice] = useState({
      id: uuidv4(),
      type: "",
      value: 0,
      date: new Date(),
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

    const setNewBalance = (invoice: InvoiceType) => {
      const currentBalance = balance;
      
      if (invoice.type === "Depósito") setBalance(currentBalance + invoice.value)
      else if (invoice.type === "Saque" || newInvoice.type === "DOC/TED" || newInvoice.type === "Pix") setBalance(currentBalance - invoice.value);
    };
  
    const createInvoice = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!newInvoice.type || newInvoice.value === 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
      if (newInvoice.type === "DOC/TED" || newInvoice.type === "Pix") {
        postTransference(newInvoice);
      }
      postInvoice(newInvoice);
      setNewBalance(newInvoice);
      setNewInvoice({
        id: uuidv4(),
        type: "",
        value: 0,
        date: new Date(),
      })
    };
      
    return (
        <div className="transaction-body container border-round">
            <img src={pixels3} className='img-3'/>
            <img src={pixels4} className='img-4'/>
            <img src={personWithCard} className='img-person-with-card' />
            <div className='inner-div'>
                <h1>Nova Transação</h1>
                <form onSubmit={createInvoice}>
                    <TransactionDropdown
                    selected={newInvoice.type}
                    setSelected={onChangeType}
                    options={["Depósito", "Saque", "DOC/TED", "Pix"]}
                    placeholder="Selecione o tipo de transação"
                    ></TransactionDropdown>
                    <div className='transaction-value'>
                        <p className='font-bold'>Valor</p>
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
                    <button type='submit' className='transaction-button'>Concluir Transação</button>
                </form>
            </div>
        </div>
    )
}
