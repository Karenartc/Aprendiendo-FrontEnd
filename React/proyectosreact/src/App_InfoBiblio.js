import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
import InfoBiblioteca from './componentes/InfoBiblioteca';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Información de Bibliotecas
        </h1>
      </header>
      <InfoBiblioteca />
    </div>
  );
}

export default App;
