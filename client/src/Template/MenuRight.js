import React, { Component } from 'react';
import './MenuRight.css';
import getjwt from '../helper'


export default class MenuRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false
        }
    }
    componentDidMount() {
        this.didUserIsHere()
    }

    didUserIsHere() {
        const jwt = getjwt();
        if (jwt) {
            this.setState({ user: true })
        }
    }

    render() {
        if (this.state.user === true) {
            return (
                <div id="MenuRight">
                    {console.log(this.state.user)}

                </div>
            );
        } else return null;
    }
}
