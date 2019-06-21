import React, { Component } from 'react';
import Admin from './component/Admin'
import Backend from './component/Backend'
import { BrowserRouter, Route } from "react-router-dom";
import './Landing.scss';

class Landing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/volunteer" component={Backend}></Route>
        </div >
      </BrowserRouter>
    );
  }
}

export default Landing;
