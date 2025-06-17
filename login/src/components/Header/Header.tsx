import './Header.css';
import imgLogo from '../../images/Logo.png';
import hamburguerIcon from '../../images/HamburguerIcon.png';
import { useEffect, useRef, useState } from 'react';
import { ContextualMenu } from '../ContextualMenu/ContextualMenu';

type HeaderProps = {
  onClickLogin: () => void;
  onClickAccount: () => void;
};

export default function Header({ onClickLogin, onClickAccount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="header-home">
      <button onClick={toggleMenu} className="hamburguer-icon">
        <img src={hamburguerIcon} className="hamburguer-icon" />
      </button>
      {isMenuOpen && (
        <div ref={menuRef}>
          <ContextualMenu isMenuOpen={isMenuOpen} onClose={closeMenu} />
        </div>
      )}
      <div className="header-text">
        <img src={imgLogo} className="header-img" />

        <p>Sobre</p>
        <p>Serviços</p>
      </div>
      <div className="header-buttons">
        <button onClick={onClickAccount} className="button-green">
          Abrir minha conta
        </button>
        <button onClick={onClickLogin} className="button-black">
          Já tenho conta
        </button>
      </div>
    </div>
  );
}
