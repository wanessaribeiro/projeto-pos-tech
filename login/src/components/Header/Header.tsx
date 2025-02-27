import './Header.css'
import imgLogo from '../../images/Logo.png'

type HeaderProps = {
    onClickLogin: () => void;
    onClickAccount: () => void;
}

export default function Header ({onClickLogin, onClickAccount}: HeaderProps) {
    return (
        <div className='header'>
            <div className='header-text'>
               <img src={imgLogo} className='header-img'/>
                <p>Sobre</p>
                <p>Serviços</p>
            </div>
            <div className='header-buttons'>
                <button onClick={onClickAccount} className='button-green'>Abrir minha conta</button>
                <button onClick={onClickLogin} className='button-black'>Já tenho conta</button>
            </div>
        </div>
    )
}