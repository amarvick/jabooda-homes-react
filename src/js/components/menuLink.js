/* File Name: MenuLink.js                                                   *
 * Description: Componentizing menu links                          */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MenuLink extends Component {
    render() {

        const style = {
            marginLeft: 15,
            marginRight: 15
        };

        return (
            <li style={style} className="active">
                <Link to={this.props.link}>
                    <span class={this.props.icon} />
                    <span class={this.props.spanClass}>
                        {this.props.page}
                    </span>
                </Link>
            </li>
        )
    }
}

export default MenuLink