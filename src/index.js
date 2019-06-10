//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Routers
import AppRoutes from './routes';
import './index.css';
import * as serviceWorker from './serviceWorker';

//Router
ReactDOM.render(<Router>
      <AppRoutes />
  </Router>, document.getElementById('root'));
serviceWorker.unregister();
