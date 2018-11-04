/* File Name: home.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux'

import HomeSlideshow from './homeSlideshow'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // The question template
  render(props) {    
    return (
      <div className = 'homeComponent'>
        <HomeSlideshow/>

        <div class="container content">
            <h1>WHO ARE WE?</h1>
            <p>Jabooda Homes, Inc. specializes in modern, contemporary, traditional and custom style residential homes. 
                We are based out of Mercer Island, WA and hold JABOOHI853D7 (Construction Contractor, General) licenses according
                to the Washington license board. With over 10 years of experience with construction and development, we make
                construction processes simple and strive to maintain friendly client relationships.
            </p>
            <p>
                Many of our homes include Green Four Star certifications. As members of the Master Builders Association, we have one objective
                in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec residential homes, and
                both multi-family and single family homes. We take proud responsibility for all of our work.
            </p>
        </div>

        <div class="container" id="projects">
            <a routerLink="/projects">
                <div id="mainImageWrapper"> 
                    {/* <img src="../assets/images/Photo-50.jpg"/> */}
                </div>
            </a>

            <p>Check out our listings now!</p>
        </div>

        <div class="container content">
            <h1>BID ON OUR PROJECTS</h1>

            <p>
                We are building 30-40 units per year, and we are interested in looking for more subcontractors to establish great relationships with. If you are interested, please get in contact and take a look at what we have in our projects tab.
            </p>

            <br/>

            <p>
                Email: jaboodahomes@yahoo.com
            </p>
        </div>

        <div class="container content"
            id="careers"
            Align="center center">
        <h1>WE'RE HIRING!</h1>
        <p>
            Are you enthusiastic about all things construction? Are you passionate about the direction of where residential real estate is headed in Seattle? If so, come check out our current open positions. We are always looking for electrifying and innovative candidates to push forward our mission.
        </p>

        <a mat-button routerLink="/careers">View Available Positions</a>
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
})

// export default connect(mapStateToProps, mapDispatchToProps)(Error)
export default Home