import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import { creatStore} from 'redux';
//import BlogReducer from './components/blogs/BlogReducer';
//import {Provider} from 'react-redux';


ReactDOM.render(
//  <provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
//  </provider>
  ,

  document.getElementById('root')
);

serviceWorker.unregister();
