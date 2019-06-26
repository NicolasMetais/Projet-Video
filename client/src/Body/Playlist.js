import React, { Component } from 'react';
import './Playlist.css'

export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    componentDidMount() {
        if (this.state.toggle === true) {
            document.getElementById('container').style.marginLeft = 16.5 + "%";
        } else document.getElementById('container').style.marginLeft = 4 + "%";
    }
    componentWillMount(toggled) {
        this.state.toggle = this.props.toggle
        console.log(this.state.toggle);
    }
    render() {
        return (
            <div id="container">
                <h1> Je suis Playlist</h1 >
            </div>
        )
    }
}