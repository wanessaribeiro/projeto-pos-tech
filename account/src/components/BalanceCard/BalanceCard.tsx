import EyeButton from '../EyeButton/EyeButton';
import pixels1 from '../../images/Pixels1.png'
import pixels2 from '../../images/Pixels2.png'
import piggyBank from '../../images/PiggyBank.png'
import './BalanceCard.css'

export default function BalanceCard () {
  return (
    <div className="container txt-white border-round balance-body">
      <img src={pixels1} className='img-1'/>
      <img src={pixels2} className='img-2'/>
      <img src={piggyBank} className='img-piggy-bank'/>
      <div className='inner-div'>
        <h1>Olá, cliente! :D</h1>
        <small>Quinta-feira, 09/09/2024</small>
      </div>
      <div className='balance-number'>
        <div className='balance-icon'>
          <h2 className='font-bold'>Saldo</h2>
          <EyeButton/>
        </div>
        <div className='balance-line'></div>
        <p>Conta Corrente</p>
        <p className="balance-text">R$ 2.500,00</p>
      </div>
    </div>
  );
};

