import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Template/Header';
import MenuLeftOpen from './Template/MenuLeftOpen';
import MenuLeftClose from './Template/MenuLeftClose';
import MenuRight from './Template/MenuRight';
import Home from './Body/Home';
import LessView from './Body/LessView';
import Follow from './Body/Follow'
import Playlist from './Body/Playlist';
import About from './Body/About';
import Contact from './Body/Contact';
import CGU from './Body/CGU';

const touggle = "c'est passé";
const sample = 'send this to home component';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
    this.switchedInDaddy = this.switchedInDaddy.bind(this);
  }
  switchedInDaddy(toggled) {
    this.setState({ toggle: toggled });
  }

  componentDidUpdate() {
    if (this.state.toggle === true) {
      document.getElementById('container').style.marginLeft = 16.5 + "%";
      document.getElementById('container').style.width = 79 + "%";
    } else {
      document.getElementById('container').style.marginLeft = 4 + "%";
      document.getElementById('container').style.width = 91.5 + "%";
    }

  }

  render() {
    let MenuLeft;
    if (this.state.toggle === true) MenuLeft = <MenuLeftOpen />
    else MenuLeft = <MenuLeftClose />
    return (
      <div id="Main">
        <Router>
          <Header switchInDaddy={this.switchedInDaddy} />
          {MenuLeft}
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} toggle={this.state.toggle} />} />
            <Route path="/LessView" render={(props) => <LessView {...props} toggle={this.state.toggle} />} />
            <Route path="/Follow" render={(props) => <Follow {...props} toggle={this.state.toggle} />} />
            <Route path="/Playlist" render={(props) => <Playlist {...props} toggle={this.state.toggle} />} />
            <Route path="/About" render={(props) => <About {...props} toggle={this.state.toggle} />} />
            <Route path="/Contact" render={(props) => <Contact {...props} toggle={this.state.toggle} />} />
            <Route path="/CGU" render={(props) => <CGU {...props} toggle={this.state.toggle} />} />
            <Route render={(props) => <Home {...props} toggle={this.state.toggle} />} />
          </Switch>
          <MenuRight />
        </Router>
      </div >
    );
  }
}
