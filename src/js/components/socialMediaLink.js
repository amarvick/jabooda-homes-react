/* File Name: SocialMediaLink.js                                   *
 * Description: Componentizing Social Media links                  */

import React, { Component } from 'react'

class SocialMediaLink extends Component {
    render() {

        const style = {
            marginLeft: 15,
            marginRight: 15,
        };

        return (
            <li style={style} className="socialMedia">
                <a href={this.props.link}>
                    <span class={this.props.icon} />
                </a>
            </li>
        )
    }
}

export default SocialMediaLink