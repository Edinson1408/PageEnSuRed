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
    <div className="Header">
        <div className='Logo'>
            <img src={logo} className="App-logo" alt="logo" />
              {this.props.name}
        </div>
        <h2>{title}</h2>
        <ul className='menu'>
            {item && item.map((item,key)=><li key={key} ><Link to={item.url}>{item.title}</Link></li>)}
        </ul>

    </div>
  );
  }
}

export default Header;
