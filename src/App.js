import React, {Component} from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Header from './components/header/header.component';
import Certify from './pages/certifications/certification.component';

class App extends Component{
  
 render() {  
  return (
  
      <BrowserRouter>
          <Header/>
            <Switch>
              <Route exact path = '/' component = {HomePage}/>
              <Route  path = '/about' component = {About}/>
              <Route exact path = '/certification' component = {Certify}/>
            </Switch>
      </BrowserRouter>
  );
  }
}

export default App;
