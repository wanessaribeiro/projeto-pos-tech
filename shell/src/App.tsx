import './App.css';
import NavBar from 'navbar/navbar'
import Invoice from 'transactions/invoice'

const App = () => {
  return (
    <div>
      <p>header fake</p>
      <div className="main-container bg-secondary-200">
        <NavBar/>
        <p className='container'>Teste de texto</p>
        <Invoice/>
      </div>
    </div>
  );
};

export default App;
