/* File Name: careers.js                                              *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import CareerData from '../../../data/careers.json'

import PageBanner from '../pageBanner'

class Careers extends Component {
  // Displaying all careers
  render(props) {    
    return (
      <div>
        <PageBanner
          header="CAREERS"
          image="house4.jpg"
        />
        <div className="pageContent careersComponent">
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
      </div>
    )
  }
}

export default Careers