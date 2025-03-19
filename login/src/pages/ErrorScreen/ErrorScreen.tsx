import { useNavigate } from "react-router";
import './ErrorScreen.css'
import { useState } from "react";
import errorImg from '../../images/404Img.png';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CreateAccountModal from "../../components/CreateAccountModal/CreateAccountModal";
import LoginModal from "../../components/LoginModal/LoginModal";

export default function ErrorScreen() {
    const navigate = useNavigate();
    const [loginOpen, setLoginOpen] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false)
    
    const onClickLogin = () => {
        setLoginOpen(true)
    }
    
    const onClickCreateAccount = () => {
        setAccountOpen(true)
    }
    
    return (
        <>
        <div className='error-body'>
            <Header onClickLogin={onClickLogin} onClickAccount={onClickCreateAccount}/>
            <div className='error-content'>
                <h1>Ops! Não encontramos a página...</h1>
                <p className='error-text'>E olha que exploramos o universo procurando por ela!</p>
                <p className='error-text'>Que tal voltar e tentar novamente?</p>
                <button className='error-button' onClick={() => navigate('/')}>Voltar ao início</button>
                <img src={errorImg} className='img-error'/>
            </div>
            <Footer/>
        </div>
        <LoginModal isOpen={loginOpen} onClickLogin={() => setLoginOpen(false)} onClose={() => setLoginOpen(false)}/>
        <CreateAccountModal isOpen={accountOpen} onClickCreateAccount={() => setAccountOpen(false)} onClose={() => setAccountOpen(false)}/>
        </>
    )
}