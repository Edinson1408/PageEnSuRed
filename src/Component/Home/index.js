//Dependencias
import React from 'react';
import background1 from '../assets/img/Paralax/background1.jpg';
import background2 from '../assets/img/Paralax/background2.jpg';
import background3 from '../assets/img/Paralax/background3.jpg';
// Import Materialize
import M from "materialize-css";

class Home extends React.Component  {
  componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
render(){
  return (
    <div>
      <div id="index-banner" className="parallax-container" style={{height: "100vh"}}>
      <div className="section no-pad-bot">
        <div className="container">
          <br /><br />
          <h1 className="header center" style={{color:"#8bc34a"}}>EnSuRed</h1>
          <div className="row center">
            <h5 className="header col s12 light" style={{color:"#37474f"}}>Sistema creados para la facilidad de tu trabajo</h5>
          </div>
          <div className="row center">
            <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light light-green">Get Started</a>
          </div>
          <br /><br />

        </div>
      </div>
      <div className="parallax"><img src={background1} alt="Unsplashed background img 1" /></div>
      </div>
      <Contenedor2 />
      <Contenedor3 />
      <Contenedor4 />
      <Contenedor5 />


    </div>
  );
  }
}


class Contenedor2 extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="section">


          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Speeds up development</h5>

                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                <h5 className="center">User Experience Focused</h5>

                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

class Contenedor3 extends React.Component {

  render(){
    return(
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
          </div>
        </div>
        <div className="parallax"><img src={background2} alt="Unsplashed background img 2" /></div>
      </div>

    );
  }

}

class Contenedor4 extends React.Component{
  render(){
    return(  <div className="container">
        <div className="section">

          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>Contact Us</h4>
              <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
            </div>
          </div>

        </div>
      </div>);
  }
}

class Contenedor5 extends React.Component{
  render(){
    return(<div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
          </div>
        </div>
      </div>
      <div className="parallax"><img src={background3} alt="Unsplashed background img 3" /></div>
    </div>);
  }
}


export default Home;
