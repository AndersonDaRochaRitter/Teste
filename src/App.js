import minhaImagem from '../src/img/user.png'
import slide1 from '../src/img/1.jpg'
import slide2 from '../src/img/2.jpg'
import slide3 from '../src/img/3.jpg'
import slide4 from '../src/img/4.jpg'
import slide5 from '../src/img/5.jpg'

import './App.css';
import './ornar.css';
import './slides.css';

import { EventoTopico1, EventoTopico2, EventoTopico3 } from './AcaoBtn';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={minhaImagem} />
        <p id='user'>Anderson da Rocha Ritter</p>
        <p className="active" id='topico1' onClick={EventoTopico1}>Topico 1</p>
        <p className="active" id='topico2' onClick={EventoTopico2}>Topico 2</p>
        <p className="active" id='topico3' onClick={EventoTopico3}>Topico 3</p>
      </header>

      {/*Decoração*/}
      <div id="circulo"></div>
      <div id="circulo2"></div>
      <div id="CirculoInferior2"></div>
      <div id="CirculoInferior"></div>
      
      <body>
        <div className="content">
          <div className="slides">
            <input type="radio" name="slide" id="slide1"></input>
            <input type="radio" name="slide" id="slide2"></input>
            <input type="radio" name="slide" id="slide3"></input>
            <input type="radio" name="slide" id="slide4"></input>
            <input type="radio" name="slide" id="slide5"></input>

            <div className="slide s1">
              <img src={slide1} alt={"descrição 1"}/>
            </div>
            <div className="slide">
              <img src={slide2} alt={"descrição 2"}/>
            </div>
            <div className="slide">
              <img src={slide3} alt={"descrição 3"}/>
            </div>
            <div className="slide">
              <img src={slide4} alt={"descrição 4"}/>
            </div>
            <div className="slide">
              <img src={slide5} alt={"descrição 5"}/>
            </div>
          </div>

          <div className="navigation">
            <label className="bar" for="slide1"></label>
            <label className="bar" for="slide2"></label>
            <label className="bar" for="slide3"></label>
            <label className="bar" for="slide4"></label>
            <label className="bar" for="slide5"></label>
          </div>

        </div>
      </body>

    </div>


  );
}

export default App;
