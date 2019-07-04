//Dependencias
import React from 'react';
import EdinsonImg from '../../assets/img/Equipo/Edinson.jpeg';


class Edinson extends React.Component  {
render(){
  return (


    <div className="col s12 m4">
    <div className="icon-block">
      <h2 className="center brown-text"><i className="material-icons"><img   src={EdinsonImg} alt="Unsplashed background img 1" style={{height:"350px"}} /></i></h2>
      <h5 className="center">Speeds up development</h5>

      <p className="light">Profesional en Computación e Informática con 3 años en desarrollo web utilizando los lenguajes php ,JavaScript, nodejs y en  framework web  como Laravel , Reacjs,   1 año trabajando en proyectos de PeopleSoft Campus Solutions y  certificado en Scrum Fundamentals.</p>
      <p>
            <img src="https://img.icons8.com/color/24/000000/youtube-play.png"></img>
            <img src="https://img.icons8.com/color/24/000000/facebook-new.png"></img>
            <img src="https://img.icons8.com/color/24/000000/instagram-new.png"></img>
            <img src="https://img.icons8.com/color/24/000000/twitter-squared.png"></img>
            <img src="https://img.icons8.com/color/24/000000/github.png"></img>
            </p>
    </div>
  </div>
  );
  }
}


export default Edinson;
