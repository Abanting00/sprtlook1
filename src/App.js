import React, { Component } from 'react';
import Header from './components/HomePage/Header';
import Router from './components/Router';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router />
          <Footer />
      </div>
    );
  }
}

export default App;