import './LoginModal.css'
import loginImg from '../../images/LoginImg.png'

type LoginModalProps = {
    isOpen: boolean;
    onClickLogin: () => void;
}

export default function LoginModal({isOpen, onClickLogin}: LoginModalProps) {
    return (
        <dialog open={isOpen} className="login-body">
            <img src={loginImg} className='login-img'/>
            <h1 className='font-bold'>Login</h1>
            <form method="dialog" className='login-form'>
                <p className='font-bold'>Email</p>
                <input
                    id="login-email"
                    name="login-email"
                    placeholder="Digite seu email"
                    className='login-input'
                />
                <p className='font-bold'>Senha</p>
                <input
                    id="login-senha"
                    name="login-senha"
                    placeholder="Digite sua senha"
                    className='login-input'
                />
                <a className='login-link'>Esqueci a senha!</a>
                <button onClick={onClickLogin} className='login-button'>Acessar</button>
            </form>
        </dialog>
    )
}