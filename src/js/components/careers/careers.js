/* File Name: careers.js                                              *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import CareerData from '../../../data/careers.json'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';

import '../../../stylesheets/careers.scss'

import CareerTemplate from './careerTemplate'
import PageBanner from '../pageBanner'

import { loadData } from '../../actions/careerActions'

class Careers extends Component {

  componentDidMount() {
    this.props.dispatch(loadData())
  }

  // Displaying all careers
  render(props) {    
    var careerData = this.props.careerData || []
    console.log(this.props.state)

    return (
      <div>
        <PageBanner
          header="CAREERS"
          image="house4.jpg"
        />
        <div className="pageContent careersComponent">
          <div className="boxContainer">
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
  careerData: state.career.careerData
})

export default connect(mapStateToProps, mapDispatchToProps)(Careers);