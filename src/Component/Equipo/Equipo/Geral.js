//Dependencias
import React from 'react';
import GeralImg from '../../assets/img/Equipo/Geral.jpeg';


class Geral extends React.Component  {
render(){
  return (
    <div className="col s12 m4">
    <div className="icon-block">
      <h2 className="center brown-text"><i className="material-icons"><img src={GeralImg} alt="Unsplashed background img 1" style={{height:"350px"}} /></i></h2>
      <h5 className="center">Speeds up development</h5>

      <p className="light">Hola, mi nombre es Geral, estoy especializado en la carrera Ing. de Sistemas, actualmente me desempeño cómo analista de sistemas en Peruvian Airlines, me defino como un profesional competente, responsable y autodidacta. Soy una persona con vocación de servicio, con deseos de superación, con miras muy altas y siempre en busca de oportunidades que me brinden crecimiento profesional. Cuando realizo un proyecto me gusta hacerlo perfecto contemplado todos los escenarios posibles.</p>
      <p className="ItenRedesSociales">
            <img className="IconosRedesSociales" src="https://img.icons8.com/color/24/000000/youtube-play.png"></img>
            <img className="IconosRedesSociales" src="https://img.icons8.com/color/24/000000/facebook-new.png"></img>
            <img className="IconosRedesSociales" src="https://img.icons8.com/color/24/000000/instagram-new.png"></img>
            <img className="IconosRedesSociales" src="https://img.icons8.com/color/24/000000/twitter-squared.png"></img>
            <img className="IconosRedesSociales" src="https://img.icons8.com/color/24/000000/github.png"></img>
            </p>
    </div>
  </div>

  );
  }
}


export default Geral;
