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
                    <ul id="UlMenu">
                        <NavLink activeClassname="active" to="/" className='MenuLinkOpen'>
                            <li className='LiMenuOpen'>
                                <img className='MenuImgOpen' src='Images/Home.png' alt="" />
                                <h5 className="h5Menu">Home</h5>
                            </li>
                        </NavLink>
                        <NavLink activeClassname="active" to="/LessView" className='MenuLinkOpen'>
                            <li className='LiMenuOpen'>
                                <img className='MenuImgOpen' src="Images/View.png" alt="" />
                                <h5 className="h5Menu">Less View</h5>
                            </li>
                        </NavLink>
                        <NavLink activeClassname="active" to="/Follow" className='MenuLinkOpen'>
                            <li className='LiMenuOpen' >
                                <img className='MenuImgOpen' src="Images/Follow.png" alt="" />
                                <h5 className="h5Menu">Follow</h5>
                            </li>
                        </NavLink>
                        <div className="Link">
                        </div>
                        <NavLink activeClassname="active" to="/Playlist" className='MenuLinkOpen'>
                            <li className='LiMenuOpen2'>
                                <img className='MenuImgOpen' src='Images/Playlist.png' alt="" />
                                <h5 className="h5Menu">Playlist</h5>
                            </li>
                        </NavLink>
                    </ul>
                    <ul id='UlFooterOpen'>
                        <NavLink className="LinkFoot" activeClassname="active" to="/About">
                            <li className="LiFooter">
                                About
                            </li>
                        </NavLink>
                        <NavLink className="LinkFoot" activeClassname="active" to="/Contact">
                            <li className="LiFooter">
                                Contact Us
                            </li>
                        </NavLink>
                        <NavLink className="LinkFoot" activeClassname="active" to="/CGU">
                            <li className="LiFooter">
                                CGU
                            </li>
                        </NavLink>
                    </ul>
                </nav >

            );

        } else {
            return (
                <nav id="MenuLeftOpen">
                    <ul id="UlMenu">
                        <NavLink activeClassname="active" to="/" className='MenuLinkOpen'>
                            <li className='LiMenuOpen '>
                                <img className='MenuImgOpen' src='Images/Home.png' alt="" />
                                <h5 className="h5Menu">Home</h5>
                            </li>
                        </NavLink>
                        <NavLink activeClassname="active" to="/LessView" className='MenuLinkOpen'>
                            <li className='LiMenuOpen'>
                                <img className='MenuImgOpen' src="Images/View.png" alt="" />
                                <h5 className="h5Menu">Less View</h5>
                            </li>
                        </NavLink>
                    </ul>
                    <ul id='UlFooterOpen'>
                        <NavLink className="LinkFoot" activeClassname="active" to="/About">
                            <li className="LiFooter">
                                <h5 className="h5Menu">About</h5>
                            </li>
                        </NavLink>
                        <NavLink className="LinkFoot" activeClassname="active" to="/Contact">
                            <li className="LiFooter">
                                <h5 className="h5Menu">Contact Us </h5>
                            </li>
                        </NavLink>
                        <NavLink className="LinkFoot" activeClassname="active" to="/CGU">
                            <li className="LiFooter">
                                <h5 className="h5Menu">CGU</h5>
                            </li>
                        </NavLink>
                    </ul>
                </nav >
            )
        }
    }
}

