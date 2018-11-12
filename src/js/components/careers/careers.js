/* File Name: careers.js                                              *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import CareerData from '../../../data/careers.json'


class Careers extends Component {
  // Displaying all careers
  render(props) {    
    return (
      <div className = 'careersComponent'>
        <h1>CAREERS</h1>
        {CareerData.map((careerDetail, index) => {
          return (
            <div>
              <h2>{careerDetail.jobtitle}</h2>
              <ul>
                {careerDetail.requirements.map(criteria => {
                  return (<li>{criteria}</li>)
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Careers