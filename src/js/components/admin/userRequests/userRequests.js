/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../../stylesheets/userRequests.scss'
import Grid from '@material-ui/core/Grid';

import LoadingScreen from '../../loadingScreen'
import ErrorScreen from '../../errorScreen'

// import { loadData } from '../../actions/careerActions'

class UserRequests extends Component {

  // Displaying all pending user requests
  render(props) {
    // var pendingRequestCount = this.props.requestData.length || 0
    var areOrIs, singularOrPlural
   
    // if (requestData !== 1) {
    //     areOrIs = 'is'
    //     singularOrPlural = ''
    // } else {
    //     areOrIs = 'are'
    //     singularOrPlural = 's'
    // }

    return (
      <div>
        <p>
            eeeeeeeeee
            {/* There { areOrIs } { pendingRequestCount } new user request{singularOrPlural}. */}
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRequests);