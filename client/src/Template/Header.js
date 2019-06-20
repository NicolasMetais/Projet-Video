import React, { Component } from 'react';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <header id='header'>
                <form id="searchForm">
                    <input id="inputForm" type="text" />
                    <button id="submitForm" type="Submit"> <img id="imgForm" src="Images/Search.png" /></button >
                </form>
                <div id="profil">
                    <img id="ProfilImg" src="Images/Profil.png" />
                </div>
            </header>
        );
    }
}