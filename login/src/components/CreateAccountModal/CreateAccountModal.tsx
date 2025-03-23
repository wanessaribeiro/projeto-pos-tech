import './CreateAccountModal.css'
import closeIcon from '../../images/CloseIcon.png'
import accountImg from '../../images/CreateAccountImg.png'

type CreateAccountModalProps = {
    isOpen: boolean;
    onCreateAccount: () => void;
    onClose: () => void;
}

export default function CreateAccountModal({isOpen, onCreateAccount, onClose}: CreateAccountModalProps) {

    const onSubmitCreateAccount = () => {
        onCreateAccount();
      };

    return (
        <dialog open={isOpen} className="account-body">
            <button onClick={onClose} className='close'><img src={closeIcon} className='close'/></button>
            <img src={accountImg} className='account-img'/>
            <h1 className='font-bold'>Preencha os campos abaixo para criar sua conta corrente!</h1>
            <form method="dialog" className='account-form' onSubmit={onSubmitCreateAccount}>
                <p className='font-bold'>Nome</p>
                <input
                    id="account-name"
                    name="account-name"
                    placeholder="Digite seu nome completo"
                    className='account-input'
                />

                <p className='font-bold'>Email</p>
                <input
                    id="account-email"
                    name="account-email"
                    placeholder="Digite seu email"
                    className='account-input'
                />
                <p className='font-bold'>Senha</p>
                <input
                    id="account-senha"
                    name="account-senha"
                    placeholder="Digite sua senha"
                    className='account-input'
                />
                <div className='account-terms'>
                    <input type="checkbox" className='account-checkbox'/>
                    <small>Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</small>
                </div>
                <button type='submit' className='account-button'>Criar conta</button>
            </form>
        </dialog>
    )
}