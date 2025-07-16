import React, { useState } from 'react';
import './LoginModal.css';
import closeIcon from '../../../domain/images/CloseIcon.png';
import loginImg from '../../../domain/images/LoginImg.png';
import { LoginDTO } from '../../../domain/dtos/Login.dto';

type LoginModalProps = {
  isOpen: boolean;
  onLogin: (dto: LoginDTO) => void;
  onClose: () => void;
};

export default function LoginModal({
  isOpen,
  onLogin,
  onClose,
}: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onSubmitLogin = () => {
    onLogin({ email, password });
  };

  return (
    <dialog open={isOpen} className="login-body">
      <button onClick={onClose} className="close">
        <img src={closeIcon} className="close" />
      </button>
      <img src={loginImg} className="login-img" />
      <h1 className="font-bold">Login</h1>
      <form method="dialog" className="login-form" onSubmit={onSubmitLogin}>
        <p className="font-bold">Email</p>
        <input
          type="email"
          id="login-email"
          name="login-email"
          placeholder="Digite seu email"
          className="login-input"
          value={email}
          onChange={onChangeEmail}
        />
        <p className="font-bold">Senha</p>
        <input
          type="password"
          id="login-senha"
          name="login-senha"
          placeholder="Digite sua senha"
          className="login-input"
          value={password}
          onChange={onChangePassword}
        />
        <a className="login-link">Esqueci a senha!</a>
        <button type="submit" className="login-button">
          Acessar
        </button>
      </form>
    </dialog>
  );
}
