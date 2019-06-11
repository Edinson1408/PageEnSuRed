import React from 'react';

//import './assets/css/App.css';

//component
import Header from './assets/Header';
import Content from './assets/Content';
import Footer from './assets/Footer';

//assets
import './assets/css/materialize.min.css';
import './assets/css/style.css';

//import './assets/js/init.js';

//Data
import item from '../data/Menu';

class App extends React.Component {

    render(){
      const { children }=this.props;
      return (
        <div className="App">
          <Header title='Mis Trabajos' item={item}/>
           <Content body={children}/>
           <Footer copyright="&copy; EnSuRed 2019" />
        </div>
      );
    }
}


export default App;
