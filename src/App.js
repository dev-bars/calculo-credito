import logo from './logo.svg';
import './App.css';
import PrimeiroComponente from './components/PrimeiroComponente'
import CardsProps from './components/CardsProps'

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
        <h3>Crédito atual: {saldo(credito,2)}</h3>
        <PrimeiroComponente/>
      </header>
      <PrimeiroComponente/>
      <CardsProps 
        foto="https://via.placeholder.com/150"
        nomecartao="Black V2"
        credito="10"
        validade="Dezembro"
      />
            <CardsProps 
        foto="https://via.placeholder.com/150"
        nomecartao="Red V2"
        credito="10"
        validade="Dezembro"
      />
    </div>
  );
}

export default App;
