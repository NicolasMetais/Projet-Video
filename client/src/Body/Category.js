import React, { Component } from 'react';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catego: '',
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

    componentWillMount() {
        this.state.toggle = this.props.toggle
        this.state.catego = this.props.category
        console.log(this.state.toggle);
    }

    render() {
        return (
            <div>
                <h1> testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1 >
            </div>
        )
    }
}