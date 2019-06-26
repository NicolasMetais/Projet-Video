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
                            <li className='LiMenuClose paddingtop'>
                                <img className='MenuImgClose' src='Images/Home.png' alt="" />
                                <NavLink activeClassname="active" to="/" className='MenuLinkClose' > Home</NavLink>
                            </li>
                            <li className='LiMenuClose'>
                                <img className='MenuImgClose' src="Images/View.png" alt="" />
                                <NavLink activeClassname="active" to="/LessView" className='MenuLinkClose'>Less View</NavLink>
                            </li>
                            <li className='LiMenuClose paddingbottom' >
                                <img className='MenuImgClose' src="Images/Follow.png" alt="" />
                                <NavLink activeClassname="active" to="/Follow" className='MenuLinkClose'>Follow</NavLink>
                            </li>
                            <div className="Link">
                            </div>
                            <li className='LiMenuClose2'>
                                <img className='MenuImgClose' src='Images/Playlist.png' alt="" />
                                <NavLink activeClassname="active" to="/Playlist" className='MenuLinkClose'>Playlist</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav id="MenuLeftClose">
                    <div id='MenuClose'>
                        <ul id="UlMenu">
                            <li className='LiMenuClose paddingtop'>
                                <img className='MenuImgClose' src='Images/Home.png' alt="" />
                                <NavLink activeClassname="active" to="/" className='MenuLinkClose' > Home</NavLink>
                            </li>
                            <li className='LiMenuClose'>
                                <img className='MenuImgClose' src="Images/View.png" alt="" />
                                <NavLink activeClassname="active" to="/LessView" className='MenuLinkClose'>Less View</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}
