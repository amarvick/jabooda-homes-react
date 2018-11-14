/* File Name: footer.js                                              *
 * Description: Footer displayed on the website                      */

import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux'
import '../../stylesheets/footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render(props) {
    const style = {
      marginLeft: 15,
      marginRight: 15,
    };

    return (
      <div className="footerComponent">

        {/* AM - componentize */}
        <ul id="socialMediaLinks">
          <li style={style} className="socialMedia">
            <a href="/">
              <span class="fa fa-facebook-f fa-2x" />
            </a>
          </li>

          <li style={style} className="socialMedia">
            <a href="/">
              <span class="fa fa-instagram fa-2x" />
            </a>
          </li>

          <li style={style} className="socialMedia">
            <a href="/">
              <span class="fa fa-linkedin fa-2x" />
            </a>
          </li>
        </ul>

        <ul id="menu">
          <li></li>
        </ul>
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

export default Footer