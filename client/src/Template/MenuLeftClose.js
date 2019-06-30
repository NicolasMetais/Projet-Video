import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLeftClose.css';
import getJwt from '../helper'


export default class MenuLeftClose extends Component {
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
                <nav id="MenuLeftClose">
                    <div id='MenuClose'>
                        <ul id="UlMenu">
                            <NavLink activeClassname="active" to="/" className='MenuLinkClose'>
                                <li className='LiMenuClose paddingtop'>
                                    <img className='MenuImgClose' src='Images/Home.png' alt="" />
                                    <h5 className="H5Close">Home</h5>
                                </li>
                            </NavLink>
                            <NavLink activeClassname="active" to="/LessView" className='MenuLinkClose'>
                                <li className='LiMenuClose'>
                                    <img className='MenuImgClose' src="Images/View.png" alt="" />
                                    <h5 className="H5Close">Less View</h5>
                                </li>
                            </NavLink>
                            <NavLink activeClassname="active" to="/Follow" className='MenuLinkClose'>
                                <li className='LiMenuClose paddingbottom' >
                                    <img className='MenuImgClose' src="Images/Follow.png" alt="" />
                                    <h5 className="H5Close">Follow</h5>
                                </li>
                            </NavLink>
                            <div className="Link">
                            </div>
                            <NavLink activeClassname="active" to="/Playlist" className='MenuLinkClose'>
                                <li className='LiMenuClose2'>
                                    <img className='MenuImgClose' src='Images/Playlist.png' alt="" />
                                    <h5 className="H5Close">Playlist</h5>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav id="MenuLeftClose">
                    <div id='MenuClose'>
                        <ul id="UlMenu">
                            <NavLink activeClassname="active" to="/" className='MenuLinkClose' >
                                <li className='LiMenuClose'>
                                    <img className='MenuImgClose' src='Images/Home.png' alt="" />
                                    <h5 className="H5Close">Home</h5>
                                </li>
                            </NavLink>
                            <NavLink activeClassname="active" to="/LessView" className='MenuLinkClose'>
                                <li className='LiMenuClose'>
                                    <img className='MenuImgClose' src="Images/View.png" alt="" />
                                    <h5 className="H5Close">Less View</h5>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}
