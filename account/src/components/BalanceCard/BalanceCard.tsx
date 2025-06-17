import React from 'react';
import EyeButton from '../EyeButton/EyeButton';
import pixels1 from '../../images/Pixels1.png';
import pixels2 from '../../images/Pixels2.png';
import piggyBank from '../../images/PiggyBank.png';
import './BalanceCard.css';
import { AccountType } from '../../libs/types';
import { formatDate } from '../../libs/shared-functions';
import { daysOfTheWeek } from '../../libs/consts';
import { useState } from 'react';

export type BalanceCardProps = {
  account: AccountType;
  balance: number;
};

export default function BalanceCard({ account, balance }: BalanceCardProps) {
  const [isVisible, setIsVisible] = useState(true);
  const dayWeek = daysOfTheWeek[new Date().getDay()];
  const todaysDate = formatDate(new Date());

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="container txt-white border-round balance-body">
      <img src={pixels1} className="img-1" />
      <img src={pixels2} className="img-2" />
      <img src={piggyBank} className="img-piggy-bank" />
      <div className="inner-div">
        <h1>Olá, {account.name}! :D</h1>
        <small>{`${dayWeek}, ${todaysDate}`}</small>
      </div>
      <div className="balance-number">
        <div className="balance-icon">
          <h2 className="font-bold">Saldo</h2>
          <EyeButton onClick={toggleVisibility} />
        </div>
        <div className="balance-line"></div>
        <p>{account.type}</p>
        <p className="balance-text">R$ {isVisible ? balance : '******'}</p>
      </div>
    </div>
  );
}
