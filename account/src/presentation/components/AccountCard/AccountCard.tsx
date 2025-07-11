import React from 'react';
import pixels1 from '../../../domain/images/Pixels3.png';
import pixels2 from '../../../domain/images/Pixels4.png';
import accountImg from '../../../domain/images/AccountImg.png';
import './AccountCard.css';
import { AccountType } from '../../../domain/shared/types';

export type AccountCardProps = {
  account: AccountType;
};

export default function AccountCard({ account }: AccountCardProps) {
  return (
    <div className="txt-black border-round account-card-body">
      <img src={pixels1} className="img-3-big" />
      <img src={pixels2} className="img-4-big" />

      <div className="inner-div">
        <h1 className="account-info-title">Minha Conta</h1>
        <img src={accountImg} className="img-account" />
      </div>
      <div className="account-info">
        <div className="account-info-item">
          <p className="font-bold">Nome do titular</p>
          <h2 className="account-info-text">{account.name}</h2>
        </div>
        <div className="account-info-line"></div>
        <div className="account-info-item">
          <p className="font-bold">Email de contato</p>
          <h2 className="account-info-text">{account.email}</h2>
        </div>
        <div className="account-info-line"></div>
        <div className="account-info-item">
          <p className="font-bold">Tipo de conta</p>
          <h2 className="account-info-text">{account.type}</h2>
        </div>
      </div>
    </div>
  );
}
