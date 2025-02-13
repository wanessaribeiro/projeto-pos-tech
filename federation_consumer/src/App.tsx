import './App.css';
import ProviderButton from 'federation_provider/button';
import NavBar from 'navbar/navbar'

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton />
        <NavBar/>
      </div>
    </div>
  );
};

export default App;
