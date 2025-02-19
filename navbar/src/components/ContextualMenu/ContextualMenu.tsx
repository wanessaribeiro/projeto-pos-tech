export type ContextualMenuProps = {
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
    <div>
      {isMenuOpen && (
        <ul
          role="menu"
        >
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={onClose}
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