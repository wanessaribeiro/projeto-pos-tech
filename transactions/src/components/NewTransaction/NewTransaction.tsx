import { useState } from 'react';
import './NewTransaction.css'
import TransactionDropdown from '../TransactionDropdown/TransactionDropdown';

export default function NewTransaction() {
    const [newInvoice, setNewInvoice] = useState({
        id: 1,
        type: "",
        value: 0,
        date: new Date(),
      });
      
    return (
        <div className="transaction-body container border-round">
            <div className='inner-div'>
                <h1>Nova Transação</h1>
                <form>
                    <TransactionDropdown
                    selected={newInvoice.type}
                    setSelected={()=>{}}
                    options={["Depósito", "Saque", "Transferência"]}
                    placeholder="Selecione o tipo de transação"
                    ></TransactionDropdown>
                    <div className='transaction-value'>
                        <p className='font-bold'>Valor</p>
                        <input
                        id="transaction-value"
                        name="transaction-value"
                        type="numeric"
                        step="0.01"
                        className="peer block w-[184px] h-[48px] cursor-pointer rounded-md border border-primary-400 py-2 pl-2 text-p text-center outline-2 text-primary-400"
                        placeholder="0"
                        value={newInvoice.value}
                        onChange={()=>{}}
                        />
                    </div>
                    <button className='transaction-button'>Concluir Transação</button>
                </form>
            </div>
        </div>
    )
}