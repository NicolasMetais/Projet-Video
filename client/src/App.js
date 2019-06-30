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
      toggle: false
    }
    this.switchedInDaddy = this.switchedInDaddy.bind(this);
  }
  switchedInDaddy(toggled) {
    this.setState({ toggle: toggled });
  }

  render() {
    let MenuLeft;
    if (this.state.toggle === true) MenuLeft = <MenuLeftOpen />
    else MenuLeft = <MenuLeftClose />
    return (
      <div id="Main">
        <Router>
          <div id="flex-header">
            <Header switchInDaddy={this.switchedInDaddy} />
          </div>
          <div id="flex-container">
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
          </div>
        </Router>
      </div >
    );
  }
}
