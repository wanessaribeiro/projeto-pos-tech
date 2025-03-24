import { useNavigate } from "react-router";
import './ContextualMenu.css'

type ContextualMenuProps = {
  isMenuOpen: boolean;
  onClose: () => void;
};

export function ContextualMenu({ isMenuOpen, onClose }: ContextualMenuProps) {
  const navigate = useNavigate();
  const navItems = [
    { value: "", label: "Início" },
    { value: "/transactions", label: "Transferências" },
    { value: "/investments", label: "Investimentos" },
    { value: "/services", label: "Outros Serviços" },
  ];

  const onClickMenu = (value: string) => {
     navigate("/dashboard" + value);
     onClose();
  }

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
                onClick={() => onClickMenu(item.value)}
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