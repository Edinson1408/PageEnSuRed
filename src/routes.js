import React from 'react';
import {Route , Switch} from 'react-router-dom';



//Componentes
import App from './Component/App';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home/';
import Page404 from './Component/page404';


const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
