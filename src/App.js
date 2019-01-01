import React, { Component } from 'react';
import { BrowserRouter, Switch, Router, Route, Redirect, NavLink } from 'react-router-dom';
import './stylesheets/App.scss';

import Header from './js/components/header'
import Footer from './js/components/footer'

import Home from './js/components/home/home'
import About from './js/components/about/about'
import Projects from './js/components/projects/projects'
import Careers from './js/components/careers/careers'
import Contactus from './js/components/contactus/contactus'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header/>
          </header>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/careers' component={Careers}/>
            <Route path='/contactus' component={Contactus}/>
            <Redirect to="/"/>
          </Switch>

          <footer className="App-footer">
            <Footer/>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
