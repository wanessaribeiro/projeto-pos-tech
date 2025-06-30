import React from 'react';
import { useNavigate } from 'react-router';
import './NavBar.css';

export default function NavBar() {
  const navigate = useNavigate();
  const navItems = [
    { value: '', label: 'Início' },
    { value: '/transactions', label: 'Transferências' },
    { value: '/investments', label: 'Investimentos' },
    { value: '/services', label: 'Outros Serviços' },
  ];

  return (
    <nav className="border-round nav-bar-body">
      <ul>
        {navItems.map((item, index) => {
          return (
            <li
              key={index}
              className="nav-bar-item"
              onClick={() => navigate('/dashboard' + item.value)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
