import React from 'react';
import './Home.css';
import bannerImg from '../../../domain/images/BannerImg.png';
import giftIcon from '../../../domain/images/GiftIcon.png';
import moneyIcon from '../../../domain/images/MoneyIcon.png';
import starIcon from '../../../domain/images/StarIcon.png';
import techIcon from '../../../domain/images/TechIcon.png';
import Header from '../../components/Header/Header';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Footer from '../../components/Footer/Footer';
import LoginModal from '../../components/LoginModal/LoginModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CreateAccountModal from '../../components/CreateAccountModal/CreateAccountModal';

type HomeProps = {
  onLogin: () => void;
  onCreateAccount: () => void;
  token: string;
};

export default function Home({ onLogin, onCreateAccount, token }: HomeProps) {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const onClickLoginButton = () => {
    setLoginOpen(true);
  };

  const onClickCreateAccountButton = () => {
    setAccountOpen(true);
  };

  useEffect(() => {
    if (token) navigate('/dashboard');
  }, [token, navigate]);

  return (
    <>
      <div className="home-body">
        <Header
          onClickLogin={onClickLoginButton}
          onClickAccount={onClickCreateAccountButton}
        />
        <div className="home-content">
          <div className="home-banner">
            <h1 className="home-text">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>
            <img src={bannerImg} className="home-img" />
            <div className="home-buttons">
              <button
                onClick={onClickCreateAccountButton}
                className="button-home-black"
              >
                Abrir conta
              </button>
              <button
                onClick={onClickLoginButton}
                className="button-home-transparent"
              >
                Já tenho conta
              </button>
            </div>
          </div>
          <div className="features-div">
            <h2>Vantagens do nosso banco:</h2>
            <div className="home-features">
              <FeatureCard
                iconImg={giftIcon}
                title="Conta e cartão gratuitos"
                description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
              />
              <FeatureCard
                iconImg={moneyIcon}
                title="Saques sem custo"
                description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
              />
              <FeatureCard
                iconImg={starIcon}
                title="Programa de pontos"
                description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
              />
              <FeatureCard
                iconImg={techIcon}
                title="Seguro Dispositivos"
                description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <LoginModal
        isOpen={loginOpen}
        onLogin={onLogin}
        onClose={() => setLoginOpen(false)}
      />
      <CreateAccountModal
        isOpen={accountOpen}
        onCreateAccount={onCreateAccount}
        onClose={() => setAccountOpen(false)}
      />
    </>
  );
}
