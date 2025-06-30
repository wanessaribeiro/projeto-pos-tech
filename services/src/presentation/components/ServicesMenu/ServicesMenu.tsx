import React from 'react';
import './ServicesMenu.css';
import pixels3 from '../../../domain/images/Pixels3.png';
import pixels4 from '../../../domain/images/Pixels4.png';
import iconCard from '../../../domain/images/IconCard.png';
import iconDonations from '../../../domain/images/IconDonations.png';
import iconInsurance from '../../../domain/images/IconInsurance.png';
import iconLoan from '../../../domain/images/IconLoan.png';
import iconPhone from '../../../domain/images/IconPhone.png';
import iconPix from '../../../domain/images/IconPix.png';
import ServicesButton from '../ServicesButton/ServicesButton';

export default function ServicesMenu() {
  return (
    <div className="services-body container border-round">
      <img src={pixels3} className="img-3" />
      <img src={pixels4} className="img-4" />
      <div className="inner-div">
        <h1>Confira os serviços disponíveis</h1>
        <div className="services">
          <div className="services-buttons">
            <ServicesButton iconImg={iconLoan} buttonLabel="Empréstimo" />
            <ServicesButton iconImg={iconPix} buttonLabel="Pix" />
          </div>
          <div className="services-buttons">
            <ServicesButton iconImg={iconCard} buttonLabel="Meus cartões" />
            <ServicesButton iconImg={iconInsurance} buttonLabel="Seguros" />
          </div>
          <div className="services-buttons">
            <ServicesButton iconImg={iconDonations} buttonLabel="Doações" />
            <ServicesButton iconImg={iconPhone} buttonLabel="Crédito celular" />
          </div>
        </div>
      </div>
    </div>
  );
}
