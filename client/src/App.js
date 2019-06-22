import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Template/Header';
import MenuLeft from './Template/MenuLeft';
import MenuRight from './Template/MenuRight';
import Home from './Body/Home';
import LessView from './Body/LessView';
import Follow from './Body/Follow'
import Playlist from './Body/Playlist';
import About from './Body/About';
import Contact from './Body/Contact';
import CGU from './Body/CGU';


export default class App extends Component {
  render() {
    return (
      <div id="Main">
        <Router>
          <Header />
          <MenuLeft />
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/LessView" component={LessView} />
            <Route path="/Follow" component={Follow} />
            <Route path="/Playlist" component={Playlist} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/CGU" component={CGU} />
            <Route component={Home} />
          </Switch>
          <MenuRight />
        </Router>
      </div>
    );
  }
}
