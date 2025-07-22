import React, { useState } from 'react';
import './CreateAccountModal.css';
import closeIcon from '../../../domain/images/CloseIcon.png';
import accountImg from '../../../domain/images/CreateAccountImg.png';
import { UserDTO } from '../../../domain/dtos/User.dto';

type CreateAccountModalProps = {
  isOpen: boolean;
  onCreateAccount: (dto: UserDTO) => void;
  onClose: () => void;
};

export default function CreateAccountModal({
  isOpen,
  onCreateAccount,
  onClose,
}: CreateAccountModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onSubmitCreateAccount = () => {
    onCreateAccount({ name, email, password });
    onClose();
  };

  return (
    <dialog open={isOpen} className="account-body">
      <button onClick={onClose} className="close">
        <img src={closeIcon} className="close" />
      </button>
      <img src={accountImg} className="account-img" />
      <h1 className="font-bold">
        Preencha os campos abaixo para criar sua conta corrente!
      </h1>
      <form
        method="dialog"
        className="account-form"
        onSubmit={onSubmitCreateAccount}
      >
        <p className="font-bold">Nome</p>
        <input
          id="account-name"
          name="account-name"
          placeholder="Digite seu nome completo"
          className="account-input"
          value={name}
          onChange={onChangeName}
        />

        <p className="font-bold">Email</p>
        <input
          type="email"
          id="account-email"
          name="account-email"
          placeholder="Digite seu email"
          className="account-input"
          value={email}
          onChange={onChangeEmail}
        />
        <p className="font-bold">Senha</p>
        <input
          id="account-senha"
          name="account-senha"
          placeholder="Digite sua senha"
          className="account-input"
          value={password}
          onChange={onChangePassword}
        />
        <div className="account-terms">
          <input type="checkbox" className="account-checkbox" required />
          <small>
            Li e estou ciente quanto às condições de tratamento dos meus dados
            conforme descrito na Política de Privacidade do banco.
          </small>
        </div>
        <button type="submit" className="account-button">
          Criar conta
        </button>
      </form>
    </dialog>
  );
}
