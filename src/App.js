import minhaImagem from '../src/img/user.png'
import './App.css';
import './ornar.css';
import {EventoTopico1, EventoTopico2, EventoTopico3} from './AcaoBtn';

function App() { 

  return (
    <div className="App">
      <header className="App-header">
        <img src={minhaImagem}/>
        <p id='user'>Anderson da Rocha Ritter</p>
        <p id='topico1' onClick={EventoTopico1}>Topico 1</p>
        <p id='topico2' onClick={EventoTopico2}>Topico 2</p>
        <p id='topico3' onClick={EventoTopico3}>Topico 3</p>
      </header>

      /*Decoração*/
      <div id="circulo"></div>
      <div id="circulo2"></div>
      <div id="CirculoInferior"></div>
      <div id="CirculoInferior2"></div>
    </div>
    
  );
}

export default App;
