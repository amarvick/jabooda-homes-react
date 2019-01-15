import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './stylesheets/App.scss';

import Header from './js/components/header'
import Footer from './js/components/footer'

import Home from './js/components/home/home'
import About from './js/components/about/about'
import Projects from './js/components/projects/projects'
import Careers from './js/components/careers/careers'
import Contactus from './js/components/contactus/contactus'
import Admin from './js/components/admin/admin'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isAdminLoggedIn: false
    }
  }

  // displayAdminLoginOrNo(adminLoginModalStatus) {
  //   var newAdminLoginModalStatus = !adminLoginModalStatus
  //   this.setState({ adminLoginModal: newAdminLoginModalStatus })
  // }

  render() {
    var screenDisplay

    if (!this.state.isAdminLoggedIn) {
      screenDisplay = (
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
            <Route path='/admin' component={Admin}/>
            <Redirect to="/"/>
          </Switch>

          <footer className="App-footer">
            <Footer/>
          </footer>
        </div>
      )
    } else {
      screenDisplay = (
        <Admin/>
      )
    }


    return (
      <BrowserRouter>
        { screenDisplay }
      </BrowserRouter>
    );
  }
}

export default App;
