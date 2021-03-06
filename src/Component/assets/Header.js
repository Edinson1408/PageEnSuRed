//Dependencias
import React from 'react';
import {Link} from 'react-router-dom';
//asest
import logo from './img/logo.svg';
import './css/Header.css';

class Header extends React.Component  {
  constructor(props) {
      super(props);
      console.log('Edinson Florian');

    }
render(){
  console.log(this.props);
  const {title , item }=this.props;
  console.log(title);
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo" style={{color: '#444'}}>AllSoftErp</a>
        <ul className="right hide-on-med-and-down">
          <li><a ><Link style={{color: '#444'}} to='/' >Inicio</Link></a></li>
          <li><a ><Link style={{color: '#444'}} to='/Nosotros'>Nosotros</Link> </a></li>
          <li><a ><Link style={{color: '#444'}} to='/Equipo'>Equipo</Link> </a></li>
          <li><a style={{color: '#444'}} href="#">Catalogo</a></li>
          <li><a style={{color: '#444'}} href="#">Contacto</a></li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  );
  }
}

export default Header;



/*  <div className="Header">
      <div className='Logo'>
          <img src={logo} className="App-logo" alt="logo" />
            {this.props.name}
      </div>
      <h2>{title}</h2>
      <ul className='menu'>
          {item && item.map((item,key)=><li key={key} ><Link to={item.url}>{item.title}</Link></li>)}
      </ul>

  </div>
  */
