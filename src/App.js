import React, { Component } from 'react';
import './App.scss';
import Aux from './hoc/aux';
import Home from './components/home';

class App extends Component {
  render() {
    return (
    <Aux>
      <Home/>
    </Aux>
    )
  }
}

export default App;
