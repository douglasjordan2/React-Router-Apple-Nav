import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

class App extends Component {
  render() {
    return (
      <>
        <Route path='/' component = { NavWrapper } />
        <Route path='/:id' render = { props => <SubNav {...props} /> } />
      </>
    );
  }
}

export default App;
