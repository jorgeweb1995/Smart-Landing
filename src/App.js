import React from 'react';
import './App.css';

// Components
import Navigation from './components/navigation.jsx';
import Services from './components/services.jsx';

// Recursos
import service1 from './assets/service-1.png';
import service2 from './assets/service-2.png';
import service3 from './assets/service-3.png';
import service4 from './assets/service-4.png';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='App-banner'>
        <div className='App-banner__container'>
          <div className='App-banner__header'>
            <h2>Lorem es un texto</h2>
            <form className='wow fadeInUp'>
              <input type='text' name='nombre' placeholder='Nombre y Apellido' />
              <input type='email' name='correo' placeholder='Correo' />
              <input type='text' name='celular' placeholder='Celular' />
              <select>
                <option>Elije tu plan</option>
                <option>1</option>
                <option>2</option>
              </select>
              <a href='#'> Contáctanos </a>
            </form>
          </div>
        </div>
      </div>
      <main>
        <div className='App-about'>
          <div className='App-about__container'>
            <div className='App-about__img wow fadeInUp'></div>
            <div className='App-about__main'>
              <div className='App-about__info'>
                <h2>Encuentra tu espacio y cierra tus proyectos.</h2>
                <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". </p>
                <a href='#'>Somos buenos en</a>
              </div>
            </div>
          </div>
        </div>

        <div className='App-services'>
          <div className='App-services__container'>
            <Services
              img= {service1}
              title= 'Ubicación céntrica'
              />
            <Services
              img= {service2}
              title='Múltiples Ambientes'
              />
            <Services 
              img= {service3}
              title='Excelentes Precios'
              />
             <Services 
              img= {service4}
              title='Horarios Flexibles'
              />
          </div>
        </div>

        <div className='App-prices'>
          <div className='App-prices__container'>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
