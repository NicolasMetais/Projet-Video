import React, { Component } from 'react';
import './App.css';
import Header from './Template/Header';
import MenuLeft from './Template/MenuLeft';
import MenuRight from './Template/MenuRight';


export default class App extends Component {
  render() {
    return (
      <div id="Main">
        <Header />
        <MenuLeft />
        <MenuRight />
      </div>
    );
  }
}
