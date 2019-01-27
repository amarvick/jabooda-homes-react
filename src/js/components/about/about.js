/* File Name: about.js                                                      *
 * Description: About the team & company                                    */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../stylesheets/about.scss'

import PageBanner from '../pageBanner'
import LoadingScreen from '../loadingScreen'
import ErrorScreen from '../errorScreen'

class About extends Component {

  render() {    
    var staffData = this.props.staffData || []
    let error = String(this.props.error) || ''
    var loading = this.props.loading || null
    var displayScreen

    if (loading) {
      displayScreen = (
        <LoadingScreen/>
      )
    } else {
      if (error === 'null') {
        displayScreen = (
          <ul>
            {staffData.map(sd => {
              return (
                <li>
                  <img 
                    alt="Person"
                    src={require('../../../images/staff/' + sd.image )} 
                    height="150" 
                    width="150" />
                  <h2>{sd.name}</h2>
                  <p>{sd.title}</p>
                </li>
              )
            })}
          </ul>
        )
      } else {
        alert(error)
        displayScreen = (
          <ErrorScreen error={error}/>
        )
      }
    }
    
    return (
      <div>
        <PageBanner
          header="ABOUT"
          image="house4.jpg"
        />

        <div className = 'pageContent'>

          <p>
            Jabooda Homes Inc is based in Mercer Island, WA and holds JABOOHI853D7 (Construction Contractor, General) licenses according to the Washington license board. 
            We have over 10 years of experience with construction and development, and make construction processes simple by maintaining friendly client relationships. 
            Our homes are built in modern, contemporary, traditional and custom styles; many with Green Four Star certifications included. We are members of the Master 
            Builders Association, with one objective in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec 
            residential homes; both multi-family and single-family homes. We take proud responsibility for all of our work.
          </p>

          <div id="theTeam">
            <img alt="People" id="backToBackImg" src={require("../../../images/Executive.png")}/>
            
            <div id="aboutBanner">  
              <h1>
                Meet Our Team
              </h1>
            </div>

            { displayScreen }
          </div>
        </div>
      </div>
    )
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
  error: state.staff.error,
  loading: state.staff.loading,
  staffData: state.staff.staffData
})

export default connect(mapStateToProps, mapDispatchToProps)(About)