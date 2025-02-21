import './InvestmentsMenu.css'

import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'

export default function InvestmentsMenu () {
    return (
        <div className="investments-body container border-round">
        <img src={pixels3} className='img-3'/>
        <img src={pixels4} className='img-4'/>
        <div className='inner-div'>
            <h1>Investimentos</h1>
            <p className="investments-text">Total: R$ 50.000.000</p>
            <div className='income-section'>
                <div className='investments-section mini-section border-round'>
                    <p>Renda Fixa</p>
                    <p>R$ 36,000.00</p>
                </div>

                <div className='investments-section mini-section border-round'>
                    <p>Renda Variável</p>
                    <p>R$ 14,000.00</p>
                </div>
            </div>
            <h2>Estatísticas</h2>
            <div className='investments-section graph-section border-round'>Numeros</div>
        </div>
    </div>
    )
}