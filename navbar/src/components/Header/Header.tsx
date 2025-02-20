import { useEffect, useRef, useState } from 'react';
import { HamburguerIcon } from '../../icons/HamburguerIcon'
import { UserIcon } from '../../icons/UserIcon'
import './Header.css'
import { ContextualMenu } from '../ContextualMenu/ContextualMenu';

export default function Header () {
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
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isMenuOpen]);
    
    return (
        <div className='header'>
            <button onClick={toggleMenu} className='hamburguer-icon'><HamburguerIcon /></button>
            {isMenuOpen && (
            <div ref={menuRef}>
              <ContextualMenu isMenuOpen={isMenuOpen} onClose={closeMenu} />
            </div>
            )}
            <small className='font-bold header-name'>Dinheirolson da Silva</small>
            <div className='user-icon'><UserIcon size={40} /></div>
        </div>
    )
}