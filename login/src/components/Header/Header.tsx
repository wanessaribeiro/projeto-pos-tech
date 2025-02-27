import './Header.css'
import imgLogo from '../../images/Logo.png'

export default function Header () {
    return (
        <div className='header'>
            <div className='header-text'>
               <img src={imgLogo} className='header-img'/>
                <p>Sobre</p>
                <p>Serviços</p>
            </div>
            <div className='header-buttons'>
                <button className='button-green'>Abrir minha conta</button>
                <button className='button-black'>Já tenho conta</button>
            </div>
        </div>
    )
}