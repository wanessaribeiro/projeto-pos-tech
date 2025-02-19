import './NavBar.css'

export default function NavBar() {
  const navItems = [
    { href: "/dashboard", label: "Início" },
    { href: "/dashboard/exchanges", label: "Transferências" },
    { href: "/dashboard/investments", label: "Investimentos" },
    { href: "/dashboard/other-services", label: "Outros Serviços" },
  ];

    return (
      <>
      <nav className="border-round nav-bar-body">
        <ul>
        {navItems.map((item, index) => {
          
          return (
          <li key={index} className='nav-bar-item'>
            {item.label}
          </li>
          );
        })}
        </ul>
      </nav>
      </>
    );
  }