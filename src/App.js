import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Products from './components/Products';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/profile' component={Profile} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
      <Route path='/products' component={Products} />
      <Route path='/user' component={User} />
      <Footer />
    </div>
  );
}

export default App;
