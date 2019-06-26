import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password_user: '',
            popupVisible: false,
            token: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.InputChange = this.InputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleClick() {
        if (!this.state.popupVisible) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    onSubmit(e) {
        console.log(this.state.password_user, this.state.email)
        e.preventDefault();
        var self = this;
        fetch("/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/Json' },
            body: JSON.stringify(this.state)
        }).then(function (res) {
            if (res.status === 201) {
                return res.text();
            }
        }).then(function (res) {
            if (res) {
                self.setState({ token: res })
                localStorage.setItem('token', self.state.token);
                window.location.reload();
            }
        }).catch(function (err) {
            console.log(err);
        });

    }

    InputChange(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id="LogIn" ref={node => { this.node = node; }}>
                <div id="profil" >
                    <img id="ProfilImg" src="Images/Profil.png" alt="Profil" onClick={this.handleClick} />
                </div>
                {this.state.popupVisible && (
                    <div id="DivFormLogIn">
                        <form id="FormLogIn" onSubmit={this.onSubmit}>
                            <h1 className="title">Log yourself in</h1>

                            <label className="LabelLog">Email : </label>
                            <input
                                className="InputLog"
                                name="email"
                                value={this.state.email}
                                onChange={this.InputChange}
                                type="email"
                                required
                            />

                            <label className="LabelLog">Password : </label>
                            <input
                                className="InputLog"
                                name="password_user"
                                value={this.state.password_user}
                                onChange={this.InputChange}
                                type="password"
                                required
                            />

                            <input id="InputSubmit" type="Submit" value="log me in" />
                            <a href="#"> Sign in</a>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}
