/* File Name: careers.js                                              *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import CareerData from '../../../data/careers.json'

import Grid from '@material-ui/core/Grid';

import PaperContainer from '../home/paperContainer'
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
          <Grid container spacing={24}>
            {CareerData.map((careerDetail, index) => {
              return (
                <div>
                  {/* <h2>{careerDetail.jobtitle}</h2>
                  <ul>
                    {careerDetail.requirements.map(criteria => {
                      return (<li>{criteria}</li>)
                    })}
                  </ul> */}
                  <PaperContainer
                    header={careerDetail.jobtitle}
                    // footerText=
                  />
                </div>
              )
            })}
          </Grid>
        </div>
      </div>
    )
  }
}

export default Careers