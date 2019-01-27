import React, { Component, StartupActions } from 'react';
import { connect } from 'react-redux' 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './stylesheets/App.scss';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./js/actions/authActions";
import { Provider } from "react-redux";
import store from "./js/store";

import Header from './js/components/header'
import Footer from './js/components/footer'

import Home from './js/components/home/home'
import About from './js/components/about/about'
import Projects from './js/components/projects/projects'
import Careers from './js/components/careers/careers'
import Contactus from './js/components/contactus/contactus'
import Admin from './js/components/admin/admin'

import { loadCareerData } from './js/actions/careerActions'
import { loadProjectData } from './js/actions/projectActions'
import { loadStaffData } from './js/actions/staffActions'
import { loadUserData } from './js/actions/userActions'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // // Redirect to login
    // window.location.href = "./login";
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      isAdminLoggedIn: false
    }
  }

  componentDidMount() {
    this.props.dispatch(loadCareerData())
    this.props.dispatch(loadProjectData())
    this.props.dispatch(loadStaffData())
    this.props.dispatch(loadUserData())
  }

  render() {
    var screenDisplay
    var loggedIn = this.props.loggedIn

    if (!loggedIn) {
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

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup())
})

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
  state: state,
  error: state.career.error,
  loading: state.career.loading,
  loggedIn: state.auth.isAuthenticated
})

export default connect(mapStateToProps, mapDispatchToProps)(App);