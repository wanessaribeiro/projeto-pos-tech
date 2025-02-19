import './ContextualMenu.css'

type ContextualMenuProps = {
  isMenuOpen: boolean;
  onClose: () => void;
};

export function ContextualMenu({ isMenuOpen, onClose }: ContextualMenuProps) {

  const navItems = [
    { href: "/dashboard", label: "Início" },
    { href: "/dashboard/exchanges", label: "Transferências" },
    { href: "/dashboard/investments", label: "Investimentos" },
    { href: "/dashboard/other-services", label: "Outros Serviços" },
  ];

  return (
    <div className="menu-body">
      {isMenuOpen && (
        <ul
          role="menu"
          className="menu-ul"
        >
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={onClose}
                className="menu-item"
              >
                  {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}