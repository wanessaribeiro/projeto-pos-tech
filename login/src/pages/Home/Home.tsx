import './Home.css'
import bannerImg from '../../images/BannerImg.png'
import giftIcon from '../../images/GiftIcon.png'
import moneyIcon from '../../images/MoneyIcon.png'
import starIcon from '../../images/StarIcon.png'
import techIcon from '../../images/TechIcon.png'
import Header from "../../components/Header/Header"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return(
        <div className='home-body'>
            <Header/>
            <div >
                <div className="home-banner">
                    <h2 className='home-text'>Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</h2>
                    <img src={bannerImg} className='home-img'/>
                </div>
                <div className='features-div'>
                    <h1>Vantagens do nosso banco:</h1>
                    <div className="home-features">
                        <FeatureCard iconImg={giftIcon} title='Conta e cartão gratuitos' description='Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.'/>
                        <FeatureCard iconImg={moneyIcon} title='Saques sem custo' description='Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.'/>
                        <FeatureCard iconImg={starIcon} title='Programa de pontos' description='Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!'/>
                        <FeatureCard iconImg={techIcon} title='Seguro Dispositivos' description='Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}