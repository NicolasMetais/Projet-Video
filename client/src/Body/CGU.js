import React, { Component } from 'react';
import './Follow.css'

export default class CGU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    componentWillMount(toggled) {
        this.state.toggle = this.props.toggle
        console.log(this.state.toggle);
    }

    render() {
        return (
            <div id="container">
                <h1> Je suis CGU</h1 >
            </div>
        )
    }
}