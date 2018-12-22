import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
