import EyeButton from '../EyeButton/EyeButton';
import './BalanceCard.css'

export default function BalnceCard () {
  return (
    <div className="container txt-white border-round balance-body">
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

