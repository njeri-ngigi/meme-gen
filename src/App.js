import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Home from './components/home/home';
import ViewImage from './components/view-image/view-image';
import './App.scss';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/image" component={ViewImage}/>
        </div>
      </Router>
      </Provider>
      
    )
  }
}

export default App;
