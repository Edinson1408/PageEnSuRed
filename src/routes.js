import React from 'react';
import {Route , Switch} from 'react-router-dom';



//Componentes
import App from './Component/App';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home/';
import Page404 from './Component/page404';
import Equipo from './Component/Equipo';

import Nosotros from './Component/Nosotros';


const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Nosotros" component={Nosotros} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Equipo" component={Equipo} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
