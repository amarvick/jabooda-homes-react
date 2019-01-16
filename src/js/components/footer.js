/* File Name: footer.js                                                     *
 * Description: Footer displayed on the website                             */

import React, { Component } from 'react'

import '../../stylesheets/footer.scss'
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'

import MenuLink from './menuLink'
import AdminLoginModal from './adminLoginModal'
import SocialMediaLink from './socialMediaLink'

function getModalStyle() {
  const top = 10
  const left = 5

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAdminLoggedIn: false,
      adminSignupModal: false,
      adminLoginModal: false
    }

    this.openAdminSignupModal = this.openAdminSignupModal.bind(this)
    this.closeAdminSignupModal = this.closeAdminSignupModal.bind(this)
    this.openAdminLoginModal = this.openAdminLoginModal.bind(this)
    this.closeAdminLoginModal = this.closeAdminLoginModal.bind(this)
  }

  openAdminSignupModal() {
    this.setState({ adminSignupModal: true })
  }

  closeAdminSignupModal() {
    this.setState({ adminSignupModal: false })
  }

  openAdminLoginModal() {
    this.setState({ adminLoginModal: true })
  }

  closeAdminLoginModal() {
    this.setState({ adminLoginModal: false })
  }

  render(props) {
    var currentYear = new Date().getFullYear()

    const style = {
      marginLeft: 15,
      marginRight: 15,
    };

    const smallText = {
      fontSize: 8
    }

    return (
      <div className="footerComponent">
        <ul id="socialMediaLinks">
          <SocialMediaLink
            link="/"
            icon="fa fa-facebook-f fa-2x"
          />

          <SocialMediaLink
            link="/"
            icon="fa fa-instagram fa-2x"
          />

          <SocialMediaLink
            link="/"
            icon="fa fa-linkedin fa-2x"
          />
        </ul>

        <ul id="footerNavMenu">
          <MenuLink
            style={style}
            link="/"
            page="Home"
          />

          <MenuLink
            style={style}
            link="/about"
            page="About Us"
          />

          <MenuLink
            style={style}
            link="/projects"
            page="Projects"
          />

          <MenuLink
            style={style}
            link="/careers"
            page="Careers"
          />

          <MenuLink
            style={style}
            link="/contactus"
            page="Contact Us"
          />
        </ul>

        <img id="combinedLogos" alt="Jabooda Sponsors" src={require("../../images/combinedlogos.png")} />

        <p>Jabooda Homes, Inc. {currentYear}</p>
        <a 
          style={smallText} 
          id="adminLogin" 
          onClick={this.openAdminLoginModal}>
            Admin Login
        </a>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.adminLoginModal}
          onClose={this.closeAdminLoginModal}
          disableBackdropClick={true}
        >
          <AdminLoginModal
            style={getModalStyle()}
            closeAdminLoginModal={this.closeAdminLoginModal}
          />
        </Modal>
      </div>
    )
  }
}

export default Footer