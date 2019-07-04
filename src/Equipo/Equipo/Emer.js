//Dependencias
import React from 'react';
import EmerImg from '../../assets/img/Equipo/Emer.jpeg';


class Emer extends React.Component  {
render(){
  return (

    <div className="col s12 m4">
    <div className="icon-block">
      <h2 className="center brown-text"><i className="material-icons"><img src={EmerImg} alt="Unsplashed background img 1" style={{height:"350px"}} /></i></h2>
      <h5 className="center">Speeds up development</h5>

      <p className="light">Soy una forma de vida que evolucionó para vivir de películas extrañas, comics, comida chatarra y snark. Lamentablemente, nunca voy a ser una Ghostbuster cuando crezca.</p>
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


export default Emer;
