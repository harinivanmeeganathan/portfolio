import React, { lazy, Suspense,Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { SmoothProvider } from 'react-smooth-scrolling'
import ParticlesBackground from './components/particles/particles.component';
import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const About = lazy(() => import('./pages/about/about.component'));
const Header = lazy(() => import('./components/header/header.component'));
const Certify = lazy(() => import('./pages/certifications/certification.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));
const Resume = lazy(() => import('./pages/resume/resume.component'));
const Footer = lazy(() => import('./components/footer/footer.component'));

class App extends Component {

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <ParticlesBackground className="particle-background" />
          <Suspense fallback={<div />}>
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
        </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
