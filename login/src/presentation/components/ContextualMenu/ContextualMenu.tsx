import './ContextualMenu.css';

type ContextualMenuProps = {
  isMenuOpen: boolean;
  onClose: () => void;
};

export function ContextualMenu({ isMenuOpen, onClose }: ContextualMenuProps) {
  const navItems = [
    { href: '/about', label: 'Sobre' },
    { href: '/about/services', label: 'Serviços' },
  ];

  return (
    <div className="menu-body">
      {isMenuOpen && (
        <ul role="menu" className="menu-ul">
          {navItems.map((item, index) => {
            return (
              <li key={index} onClick={onClose} className="menu-item">
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
