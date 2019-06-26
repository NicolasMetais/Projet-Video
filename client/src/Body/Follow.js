import React, { Component } from 'react';
import './Follow.css'

export default class Follow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    componentDidMount() {
        if (this.state.toggle === true) {
            document.getElementById('container').style.marginLeft = 16.5 + "%";
            document.getElementById('container').style.width = 79 + "%";
        } else {
            document.getElementById('container').style.marginLeft = 4 + "%";
            document.getElementById('container').style.width = 91.5 + "%";
        }
    }
    componentWillMount(toggled) {
        this.state.toggle = this.props.toggle
        console.log(this.state.toggle);
    }

    render() {
        return (
            <div id="container">
                <h1> Je suis Follow</h1 >
            </div>
        )
    }
}