import logo from './logo.svg';
import './App.css';

const nomeUsuario = "Ana";
const credito = 10;

function saldo(credito,b){
  return credito - b
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>É bom ter você aqui, {nomeUsuario}.</p>
        <h2>Crédito atual: {saldo(credito,2)}</h2>
        
      </header>>
    </div>
  );
}

export default App;
