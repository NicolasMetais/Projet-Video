import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLeftOpen.css';
import getJwt from '../helper'


export default class MenuLeftOpen extends Component {
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
        const jwt = getJwt();
        if (jwt) {
            this.setState({ user: true })
        }
    }

    render() {
        if (this.state.user === true) {
            return (
                <nav id="MenuLeftOpen">
                    <div id='MenuOpen'>
                        <ul id="UlMenu">
                            <NavLink activeClassname="active" to="/" className='MenuLinkOpen'>
                                <li className='LiMenuOpen paddingtop'>
                                    <img className='MenuImgOpen' src='Images/Home.png' alt="" />
                                    <p>Home</p>
                                </li>
                            </NavLink>
                            <li className='LiMenuOpen'>
                                <img className='MenuImgOpen' src="Images/View.png" alt="" />
                                <NavLink activeClassname="active" to="/LessView" className='MenuLinkOpen'>Less View</NavLink>
                            </li>
                            <li className='LiMenuOpen paddingbottom' >
                                <img className='MenuImgOpen' src="Images/Follow.png" alt="" />
                                <NavLink activeClassname="active" to="/Follow" className='MenuLinkOpen'>Follow</NavLink>
                            </li>

                            <div className="Link">
                            </div>
                            <li className='LiMenuOpen2'>
                                <img className='MenuImgOpen' src='Images/Playlist.png' alt="" />
                                <NavLink activeClassname="active" to="/Playlist" className='MenuLinkOpen'>Playlist</NavLink>
                            </li>
                        </ul>
                        <ul id='UlFooterOpen'>
                            <li className="LiFooter">
                                <NavLink className="LinkFoot" activeClassname="active" to="/About"> About</NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink className="LinkFoot" activeClassname="active" to="/Contact"> Contact Us </NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink className="LinkFoot" activeClassname="active" to="/CGU">CGU</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav >

            );

        } else {
            return (
                <nav id="MenuLeftOpen">
                    <div id='MenuOpen'>
                        <ul id="UlMenu">
                            <li className='LiMenuOpen paddingtop'>
                                <img className='MenuImgOpen' src='Images/Home.png' alt="" />
                                <NavLink activeClassname="active" to="/" className='MenuLinkOpen'>Home</NavLink>
                            </li>
                            <NavLink activeClassname="active" to="/LessView" className='MenuLinkOpen'>
                                <li className='LiMenuOpen'>
                                    <img className='MenuImgOpen' src="Images/View.png" alt="" />
                                    <p>Less View</p>>
                                </li>
                            </NavLink>
                        </ul>
                        <ul id='UlFooterOpen'>
                            <li className="LiFooter">
                                <NavLink className="LinkFoot" activeClassname="active" to="/About"> About</NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink className="LinkFoot" activeClassname="active" to="/Contact"> Contact Us </NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink className="LinkFoot" activeClassname="active" to="/CGU">CGU</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav >
            )
        }
    }
}

