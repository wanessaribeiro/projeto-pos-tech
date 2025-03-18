import './NewInvestment.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import graphImg from '../../images/GraphImg.png'
import InvestmentDropdown from '../InvestmentDropdown/InvestmentDropdown'
import { useState } from 'react'

export type NewInvestmentProps = {
  newInvestments: (type: string, newInvestment: number) => void;
  setPage: (page: string) => void;
}

export default function NewInvestment({newInvestments, setPage}: NewInvestmentProps) {
    const [newInvestment, setNewInvestment] = useState({
        type: '',
        value: 0
    })

    const onChangeType = (value: string) => {
        setNewInvestment((prev) => ({ ...prev, type: value }));
      };
    
    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (!isNaN(Number(value))) {
        setNewInvestment((prev) => ({ ...prev, value: Number(value) }));
      }
    };

    const addNewInvestment = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!newInvestment.type || newInvestment.value === 0) {
          alert("Por favor, preencha todos os campos corretamente.");
          return;
        }
        newInvestments(newInvestment.type, newInvestment.value)
        setPage('Investments')
      };
      
    return (
        <div className="investment-body container border-round">
            <img src={pixels3} className='img-3'/>
            <img src={pixels4} className='img-4'/>
            <img src={graphImg} className='img-graph' />
            <div className='inner-div'>
                <h1>Nova Aplicação de Investimento</h1>
                <form onSubmit={addNewInvestment}>
                    <InvestmentDropdown
                    selected={newInvestment.type}
                    setSelected={onChangeType}
                    options={['Fundos de investimento', 'Tesouro direto', 'Previdêndia privada', 'Bolsa de valores']}
                    placeholder="Selecione o tipo de investimento"
                    ></InvestmentDropdown>
                    <div className='investment-value'>
                        <p className='font-bold'>Valor</p>
                        <input
                        id="investment-value"
                        name="investment-value"
                        type="numeric"
                        step="0.01"
                        placeholder="0"
                        value={newInvestment.value}
                        onChange={onChangeValue}
                        />
                    </div>
                    <button type='submit' className='investment-button'>Investir</button>
                </form>
            </div>
        </div>
    )
}
