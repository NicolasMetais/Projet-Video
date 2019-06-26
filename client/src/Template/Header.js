import React, { Component } from 'react';
import './Header.css';
import Login from './Login';


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.handleclick = this.handleclick.bind(this);
    }

    handleclick() {
        this.setState({ toggle: !this.state.toggle });
        let toggle = this.state.toggle;
        this.props.switchInDaddy(toggle);
    }

    render() {
        return (
            <header id='header'>
                <div id="FakeHeader">
                    <img id="burger" src="Images/Burger.png" alt="Interaction Menu" onClick={this.handleclick} />
                    <img id="logo" src="Images/Carre.gif" alt="logo" />
                </div>
                <form id="searchForm">
                    <input id="inputForm" type="text" />
                    <button id="submitForm" type="Submit"> <img id="imgForm" src="Images/Search.png" alt="submit" /></button >
                </form>
                <Login />
            </header>
        );
    }
}