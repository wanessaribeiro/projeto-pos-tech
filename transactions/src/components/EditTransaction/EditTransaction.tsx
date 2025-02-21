import './EditTransaction.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import personWithCard from '../../images/PersonWithCard.png'
import TransactionDropdown from "../TransactionDropdown/TransactionDropdown"

export type EditTransactionProps = {
    id: string
}

export default function EditTransaction(){
    return (
        <div className="transaction-body container border-round">
            <img src={pixels3} className='img-3'/>
            <img src={pixels4} className='img-4'/>
            <img src={personWithCard} className='img-person-with-card' />
            <div className='inner-div'>
                <h1>Editar Transação</h1>
                <form>
                    <TransactionDropdown
                    selected='{}'
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
                        placeholder="0"
                        value=''
                        onChange={()=>{}}
                        />
                    </div>
                    <button className='transaction-button'>Concluir Edição</button>
                </form>
            </div>
        </div>
    )
}