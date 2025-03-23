import './LoginModal.css'
import closeIcon from '../../images/CloseIcon.png'
import loginImg from '../../images/LoginImg.png'

type LoginModalProps = {
    isOpen: boolean;
    onLogin: () => void;
    onClose: () => void;
}

export default function LoginModal({isOpen, onLogin, onClose}: LoginModalProps) {

    const onSubmitLogin = () => {
        onLogin();
      };

      
    return (
        <dialog open={isOpen} className="login-body">
            <button onClick={onClose} className='close'><img src={closeIcon} className='close'/></button>
            <img src={loginImg} className='login-img'/>
            <h1 className='font-bold'>Login</h1>
            <form method="dialog" className='login-form' onSubmit={onSubmitLogin}>
                <p className='font-bold'>Email</p>
                <input
                    type='email'
                    id="login-email"
                    name="login-email"
                    placeholder="Digite seu email"
                    className='login-input'
                />
                <p className='font-bold'>Senha</p>
                <input
                    type='password'
                    id="login-senha"
                    name="login-senha"
                    placeholder="Digite sua senha"
                    className='login-input'
                />
                <a className='login-link'>Esqueci a senha!</a>
                <button type='submit' className='login-button'>Acessar</button>
            </form>
        </dialog>
    )
}