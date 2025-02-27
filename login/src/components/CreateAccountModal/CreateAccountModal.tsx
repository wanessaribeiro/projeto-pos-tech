import './CreateAccountModal.css'
import accountImg from '../../images/CreateAccountImg.png'

type CreateAccountModalProps = {
    isOpen: boolean;
    onClickCreateAccount: () => void;
}

export default function CreateAccountModal({isOpen, onClickCreateAccount}: CreateAccountModalProps) {
    return (
        <dialog open={isOpen} className="account-body">
            <img src={accountImg} className='account-img'/>
            <h1 className='font-bold'>Preencha os campos abaixo para criar sua conta corrente!</h1>
            <form method="dialog" className='account-form'>
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
                <button onClick={onClickCreateAccount} className='account-button'>Criar conta</button>
            </form>
        </dialog>
    )
}