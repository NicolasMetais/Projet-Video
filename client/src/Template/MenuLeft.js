import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import './MenuLeft.css';
import getjwt from '../helper';
import Home from '../Body/Home';
import LessView from '../Body/LessView';
import Follow from '../Body/Follow'
import Playlist from '../Body/Playlist';
import About from '../Body/About';
import Contact from '../Body/Contact';
import CGU from '../Body/CGU';


export default class MenuLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuClose: false,
            MenuOpen: true,
            MenuLinkClose: false,
            MenuLinkOpen: true,
            LiMenuClose: false,
            LiMenuOpen: true,
            LiMenuClose2: false,
            LiMenuOpen2: true,
            MenuImgClose: false,
            MenuImgOpen: true,
            UlFooterClose: false,
            UlFooterOpen: true,
            user: false
        };
        this.menu = this.menu.bind(this);
    };

    menu() {
        this.setState({ MenuLinkClose: !this.state.MenuLinkClose, MenuLinkOpen: !this.state.MenuLinkOpen, LiMenuClose: !this.state.LiMenuClose, LiMenuOpen: !this.state.LiMenuOpen, LiMenuClose2: !this.state.LiMenuClose2, LiMenuOpen2: !this.state.LiMenuOpen2, MenuImgClose: !this.state.MenuImgClose, MenuImgOpen: !this.state.MenuImgOpen, MenuClose: !this.state.MenuClose, MenuOpen: !this.state.MenuOpen, UlFooterClose: !this.state.UlFooterClose, UlFooterOpen: !this.state.UlFooterOpen })
    }
    componentDidMount() {
        this.didUserIsHere()
    }

    didUserIsHere() {
        const jwt = getjwt();
        if (jwt) {
            this.setState({ user: true })
        }
    }
    render() {
        if (this.state.user === true) {
            return (
                <nav id="MenuLeftOpen">
                    <div id={(this.state.MenuOpen ? 'MenuOpen' : '' | this.state.MenuClose ? 'MenuClose' : '')}>
                        <ul id="UlMenu">
                            <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')}/* "paddingtop" */>
                                <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src='Images/Home.png' />
                                <NavLink activeClassname="active" to="/" className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Home</NavLink>
                            </li>
                            <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')}>
                                <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src="Images/View.png" />
                                <NavLink activeClassname="active" to="/LessView" className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Less View</NavLink>
                            </li>
                            <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')} /* "paddingbottom" */>
                                <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src="Images/Follow.png" />
                                <NavLink activeClassname="active" to="/Follow" className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Follow</NavLink>
                            </li>

                            <div className="Link">
                            </div>
                            <li className={(this.state.LiMenuClose2 ? 'LiMenuClose2' : '' | this.state.LiMenuOpen2 ? 'LiMenuOpen2' : '')}>
                                <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src='Images/Playlist.png' />
                                <NavLink activeClassname="active" to="/Playlist" className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Playlist</NavLink>
                            </li>
                        </ul>
                        <ul id={(this.state.UlFooterClose ? 'UlFooterClose' : '' | this.state.UlFooterOpen ? 'UlFooterOpen' : '')}>
                            <li className="LiFooter">
                                <NavLink activeClassname="active" to="/About"> About</NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink activeClassname="active" to="/Contact"> Contact Us </NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink activeClassname="active" to="/CGU">CGU</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav >
            );
        } else {
            return (
                <nav id="MenuLeftOpen">
                    <div id={(this.state.MenuOpen ? 'MenuOpen' : '' | this.state.MenuClose ? 'MenuClose' : '')}>
                        <ul id="UlMenu">
                            <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')}/* "paddingtop" */>
                                <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src='Images/Home.png' />
                                <NavLink activeClassname="active" to="/" className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Home</NavLink>
                            </li>
                            <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')}>
                                <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src="Images/View.png" />
                                <NavLink activeClassname="active" to="/LessView" className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Less View</NavLink>
                            </li>
                        </ul>
                        <ul id={(this.state.UlFooterClose ? 'UlFooterClose' : '' | this.state.UlFooterOpen ? 'UlFooterOpen' : '')}>
                            <li className="LiFooter">
                                <NavLink activeClassname="active" to="/About"> About</NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink activeClassname="active" to="/Contact"> Contact Us </NavLink>
                            </li>
                            <li className="LiFooter">
                                <NavLink activeClassname="active" to="/CGU">CGU</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            )

        }
    }
}
