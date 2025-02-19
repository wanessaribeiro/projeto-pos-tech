import { useState } from 'react';
import './NewTransaction.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import personWithCard from '../../images/PersonWithCard.png'
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
            <img src={pixels3} className='img-1'/>
            <img src={pixels4} className='img-2'/>
            <img src={personWithCard} className='img-person-with-card' />
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