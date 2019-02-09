/* File Name: careers.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import './careers.scss'
import Grid from '@material-ui/core/Grid';

import CareerTemplate from './careerTemplate/careerTemplate'
import PageBanner from '../pageBanner'
import LoadingScreen from '../loadingScreen'
import ErrorScreen from '../errorScreen'

class Careers extends Component {

  // Displaying all careers
  render(props) {
    var careerData = this.props.careerData || []
    let error = String(this.props.error) || ''
    var loading = this.props.loading || null
    var displayScreen

    console.log(this.props.state)

    if (loading) {
      displayScreen = (
        <LoadingScreen/>
      )
    } else {
      if (error === 'null') {
        displayScreen = (
          <Grid container spacing={24}>
            {careerData.map((careerDetail, index) => {
              return (
                <CareerTemplate
                  faClass="fas fa-user-tie fa-5x"
                  description={careerDetail.description}
                  requirements={careerDetail.requirements}
                  header={careerDetail.jobtitle}
                />
              )
            })}
          </Grid>
        )
      } else {
        displayScreen = (
          <ErrorScreen error={error}/>
        )
      }
    }

    return (
      <div>
        <PageBanner
          header="CAREERS"
          image="house4.jpg"
        />
        <div className="pageContent careersComponent">
          <div className="boxContainer">
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
  error: state.career.error,
  loading: state.career.loading,
  careerData: state.career.careerData
})

export default connect(mapStateToProps, mapDispatchToProps)(Careers);