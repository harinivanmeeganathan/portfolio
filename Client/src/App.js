import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { SmoothProvider } from 'react-smooth-scrolling'
import ParticlesBackground from './components/particles/particles.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Header from './components/header/header.component';
import Certify from './pages/certifications/certification.component';
import Contact from './pages/contact/contact.component';
import Resume from './pages/resume/resume.component';
//import Test from './pages/test/test.comp';
import Footer from './components/footer/footer.component';
class App extends Component {

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <ParticlesBackground className="particle-background" />
          <Header />
          <SmoothProvider skew={false}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/certification' component={Certify} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/resume' component={Resume} />
            </Switch>
          </SmoothProvider>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
