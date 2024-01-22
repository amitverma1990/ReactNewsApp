import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // c ='amit';
  render() {
    return (
      // <div>this is myself {this.c}</div>
      <div>

        <Navbar />
        <News  pagesize={5} country="in" category="sports"/>

      </div>

    )
  }
}



