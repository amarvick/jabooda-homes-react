/* File Name: home.js                                              *
 * Description: Jabooda home page                                  */

import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux'

import HomeSlideshow from './homeSlideshow'
import PaperContainer from './paperContainer.js';
import ContentContainer from './contentContainer.js';

// Design
import '../../../stylesheets/home.scss'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // The question template
  render(props) {
    
    return (
      <div>
        <HomeSlideshow/>

        <div id="slideshowContents">
            <div class="wrapper">
                {/* <img src={require("../../images/largelogo.PNG")} /> */}
                <h1>
                    Jabooda Homes, Inc.
                </h1>
                <hr/>
                <p>
                    At Jabooda, we believe in a home for every family.
                </p>

                <div class="buttonContainer">
                    <Button variant="contained" href="./About">About</Button>
                    <Button variant="contained" href="./Contactus">Contact</Button>
                </div>
            </div>
        </div>

        <div className="boxContainer">
            <Grid container spacing={24}>
                <PaperContainer
                    link="./Projects"
                    faClass="fa fa-list-alt fa-5x"
                    header="Sold Projects"
                    footerText="View all of our sold projects"
                />
                <PaperContainer
                    link="./Projects"
                    faClass="fa fa-home fa-5x"
                    header="For Sale"
                    footerText="View all of our homes currently for sale"
                />
                <PaperContainer
                    link="./Projects"
                    faClass="fa fa-wrench fa-5x"
                    header="In Progress"
                    footerText="View all of our homes currently under construction"
                />
            </Grid>
        </div>

        <div className="pageContent">
            <ContentContainer
                header="WHO ARE WE?"
                paragraph1="Jabooda Homes, Inc. specializes in modern, contemporary, traditional and custom style residential homes. 
                            We are based out of Mercer Island, WA and hold JABOOHI853D7 (Construction Contractor, General) licenses according
                            to the Washington license board. With over 10 years of experience with construction and development, we make
                            construction processes simple and strive to maintain friendly client relationships."
                paragraph2="Many of our homes include Green Four Star certifications. As members of the Master Builders Association, we have one objective
                            in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec residential homes, and
                            both multi-family and single family homes. We take proud responsibility for all of our work."
                image=""
            />

            <ContentContainer
                header="BID ON OUR PROJECTS"
                paragraph1="We are building 30-40 units per year, and we are interested in looking for more subcontractors to establish great relationships 
                            with. If you are interested, please get in contact and take a look at what we have in our projects tab."
                paragraph2=" Email: jaboodahomes@yahoo.com."
                image=""
            />


            <ContentContainer
                header="WE'RE HIRING!"
                paragraph1="Are you enthusiastic about all things construction? Are you passionate about the direction of where residential real estate is headed in Seattle? If so, come check out our current open positions. We are always looking for electrifying and innovative candidates to push forward our mission."
                image=""
                link="./Careers"
            />
        </div>
      </div>
    )
  }
}

export default Home