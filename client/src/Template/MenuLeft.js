import React, { Component } from 'react';
import './MenuLeft.css';


export default class MenuLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuLeftClose: false,
            MenuLeftOpen: true,
            MenuLinkClose: false,
            MenuLinkOpen: true,
            LiMenuClose: false,
            LiMenuOpen: true,
            LiMenuClose2: false,
            LiMenuOpen2: true,
            MenuImgClose: false,
            MenuImgOpen: true
        };
        this.menu = this.menu.bind(this);
    };

    menu() {
        this.setState({ MenuLinkClose: !this.state.MenuLinkClose, MenuLinkOpen: !this.state.MenuLinkOpen, LiMenuClose: !this.state.LiMenuClose, LiMenuOpen: !this.state.LiMenuOpen, LiMenuClose2: !this.state.LiMenuClose2, LiMenuOpen2: !this.state.LiMenuOpen2, MenuImgClose: !this.state.MenuImgClose, MenuImgOpen: !this.state.MenuImgOpen, MenuLeftClose: !this.state.MenuLeftClose, MenuLeftOpen: !this.state.MenuLeftOpen })
        /* change[i].classList.add("MenuLinkClose");
         change[i].classList.remove("MenuLinkOpen");
           change = document.getElementsByClassName("LiMenuOpen");
          for (let i = 0; i < change.length; i++) {
              change[i].classList.add("LiMenuClose");
              change[i].classList.remove("LiMenuOpen");
          }
          change = document.getElementsByClassName("LiMenuOpen2");
          for (let i = 0; i < change.length; i++) {
              change[i].classList.add("LiMenuClose2");
              change[i].classList.remove("LiMenuOpen2");
          }
          change = document.getElementsByClassName("MenuImg")
          for (let i = 0; i < change.length; i++) {
              change[i].classList.add("MenuImg2");
              change[i].classList.remove("MenuImg");
          } */
        /*     } else if(this.state.burger !== 0) {
            document.getElementById("MenuLeft").style.width = "17%";
            this.setState({ burger: 0 }); */
    }
    render() {
        return (
            <nav id={(this.state.MenuLeftOpen ? 'MenuLeftOpen' : '' | this.state.MenuLeftClose ? 'MenuLeftClose' : '')}>
                <div>
                    <img id="burger" src="Images/Burger.png" onClick={this.menu} />
                    <img id="logo" src="Images/Carre.gif" />
                </div>
                <ul id="UlMenu">
                    <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')}/* "paddingtop" */>
                        <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src='Images/Home.png' />
                        <a className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Home</a>
                    </li>
                    <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')}>
                        <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src="Images/View.png" />
                        <a className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Less View</a>
                    </li>
                    <li className={(this.state.LiMenuClose ? 'LiMenuClose' : '' | this.state.LiMenuOpen ? 'LiMenuOpen' : '')} /* "paddingbottom" */>
                        <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src="Images/Follow.png" />
                        <a className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Follow</a>
                    </li>

                    <div className="Link">
                    </div>
                    <li className={(this.state.LiMenuClose2 ? 'LiMenuClose2' : '' | this.state.LiMenuOpen2 ? 'LiMenuOpen2' : '')}>
                        <img className={(this.state.MenuImgClose ? 'MenuImgClose' : '' | this.state.MenuImgOpen ? 'MenuImgOpen' : '')} src='Images/Playlist.png' />
                        <a className={(this.state.MenuLinkClose ? 'MenuLinkClose' : '' | this.state.MenuLinkOpen ? 'MenuLinkOpen' : '')}>Playlist</a>
                    </li>
                </ul>
                <ul id="UlFooter">
                    <li className="LiFooter">
                        <a> A propos</a>
                    </li>
                    <li className="LiFooter">
                        <a>Nous contacter </a>
                    </li>
                    <li className="LiFooter">
                        <a>CGU</a>
                    </li>
                </ul>
            </nav >
        );
    }
}
