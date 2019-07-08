//Dependencias
import React from 'react';
import background1 from '../assets/img/Paralax/background1.jpg';
import background2 from '../assets/img/Paralax/background2.jpg';
import background3 from '../assets/img/Paralax/background3.jpg';




import Geral from './Equipo/Geral.js';
import Edinson from './Equipo/Edinson.js';
import Emer from './Equipo/Emer.js';


class Nosotros extends React.Component  {
render(){
  return (
    <div className="ContenedorEquipo">

      <div className="row">
        <Geral />
        <Edinson />
        <Emer />
      </div>

    <div className="container">
      
      
      
      
      </div>
    </div>
  );
  }
}


export default Nosotros;
