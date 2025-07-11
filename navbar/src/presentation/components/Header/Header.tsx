import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { HamburguerIcon } from '../../../domain/icons/HamburguerIcon';
import { UserIcon } from '../../../domain/icons/UserIcon';
import './Header.css';
import { ContextualMenu } from '../ContextualMenu/ContextualMenu';
import { AccountType } from '../../../domain/shared/types';
import { LogoutIcon } from '../../../domain/icons/LogoutIcon';

type HeaderProps = {
  account: AccountType;
  onClickLogout: () => void;
  onClickAccount: () => void;
};

export default function Header({
  account,
  onClickLogout,
  onClickAccount,
}: HeaderProps) {
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
    <div className="header">
      <button onClick={toggleMenu} className="hamburguer-button">
        <HamburguerIcon />
      </button>
      {isMenuOpen && (
        <div ref={menuRef}>
          <ContextualMenu isMenuOpen={isMenuOpen} onClose={closeMenu} />
        </div>
      )}
      <small className="font-bold header-name">{account.name}</small>
      <div className="icons">
        <button onClick={onClickAccount} className="user-icon">
          <UserIcon size={40} />{' '}
        </button>
        <button onClick={onClickLogout} className="logout-icon">
          <LogoutIcon size={40} />
        </button>
      </div>
    </div>
  );
}
