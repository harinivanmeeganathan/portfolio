import React, {Component} from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
class App extends Component{
  
 render() {  
  return (
  
      <BrowserRouter>
          <Header/>
            <Switch>
              <Route exact path = '/' component = {HomePage}/>
             
            </Switch>
      </BrowserRouter>
  );
  }
}

export default App;
