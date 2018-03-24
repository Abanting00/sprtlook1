import React, { Component } from 'react';
import Header from './components/HomePage/Header';
import Router from './components/Router';
import Footer from './components/Footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div id="Wrapper">
          <Router />
      </div>
    );
  }
}

export default App;