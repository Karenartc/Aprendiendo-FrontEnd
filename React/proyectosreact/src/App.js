import logo from './logo.svg';
import './App.css';
// import PrimerComponente from './PrimerComponente';
import {ejercicio1Component } from './componentes/ejercicio1Component';

function App() {
  const fecha = new Date();
  const anioActual = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Ejercicio 1 - React - UserState - Props
        </h1>
      </header>
      <ejercicio1Component anio = {anioActual} />
    </div>
  );
}

export default App;
