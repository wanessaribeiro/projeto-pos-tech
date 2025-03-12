import './NewInvestment.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import graphImg from '../../images/GraphImg.png'
import InvestmentDropdown from '../InvestmentDropdown/InvestmentDropdown'

export default function NewInvestment() {
      
    return (
        <div className="investment-body container border-round">
            <img src={pixels3} className='img-3'/>
            <img src={pixels4} className='img-4'/>
            <img src={graphImg} className='img-graph' />
            <div className='inner-div'>
                <h1>Nova Aplicação de Investimento</h1>
                <form>
                    <InvestmentDropdown
                    selected={''}
                    setSelected={() => {}}
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
                        value=''
                        onChange={() => {}}
                        />
                    </div>
                    <button type='submit' className='investment-button'>Investir</button>
                </form>
            </div>
        </div>
    )
}
