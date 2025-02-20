import './NavBar.css'

interface NavBarProps{
  setPage: (page: string) => void;
}

export default function NavBar({setPage}:NavBarProps) {
  const navItems = [
    { value: "Home", label: "Início" },
    { value: "Transactions", label: "Transferências" },
    { value: "Investments", label: "Investimentos" },
    { value: "Other", label: "Outros Serviços" },
  ];

    return (
      <>
      <nav className="border-round nav-bar-body">
        <ul>
        {navItems.map((item, index) => {
          
          return (
          <li key={index} className='nav-bar-item' onClick={() => setPage(item.value)}>
            {item.label}
          </li>
          );
        })}
        </ul>
      </nav>
      </>
    );
  }