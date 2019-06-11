//Dependencias
import React from 'react';


class Home extends React.Component  {
render(){
  return (
    <div id="index-banner" className="parallax-container" style={{height: "100vh"}}>
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header center" style={{color:"#8bc34a"}}>EnSuRed</h1>
        <div className="row center">
          <h5 className="header col s12 light" style={{color:"#37474f"}}>Sistema creados para la facilidad de tu trabajo</h5>
        </div>
        <div class="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light light-green">Get Started</a>
        </div>
        <br /><br />

      </div>
    </div>
    <div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1" /></div>
    </div>
  );
  }
}

export default Home;
